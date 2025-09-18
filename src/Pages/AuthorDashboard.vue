<script setup lang="ts">
    import UserInfoComponent from '../components/UserInfoComponent.vue';
    import AuthorBlogsCard from '../components/AuthorBlogsCard.vue';
    import { useBlogsStore } from '../stores/BlogStore';
    import { onBeforeMount, ref } from 'vue';
    import type { BlogType } from '../EntityTypes/Entities';

    // variables
    const blogsToDisplay = ref()

    // store
    const blogsStore = useBlogsStore() 

    // run on component initiation
    onBeforeMount(async()=>{
        let blogs:BlogType[] | undefined = blogsStore.getAllBlogs

        // check if there are blogs is the store and get the blog data
        if(blogs && blogs.length > 0){
            // set data
            blogsToDisplay.value = blogs
            return
        }

        // runs if the store is empty
        // get blogs from database
        blogs = await blogsStore.getInitialBlogs()               
        if(blogs == undefined) return                
        // set featured data
        blogsToDisplay.value = blogs
    }) 

</script>

<template>
    <UserInfoComponent/>

    <section class="w-[80%] mx-auto mt-8 mb-10">
        <p class="text-xl font-bold">My Blogs</p>
        <ul class="mt-4">
            <li v-for="blog in blogsToDisplay" :key="blog.Id">
                <AuthorBlogsCard :blog="blog"/>
            </li>
        </ul>
    </section>
</template>

<style scoped></style>