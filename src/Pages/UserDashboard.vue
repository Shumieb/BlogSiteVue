<script setup lang="ts">
    import BlogVComponent from '../components/BlogVComponent.vue';
    import UserInfoComponent from '../components/UserInfoComponent.vue';
    import NewsLetterSignUpComponent from '../components/NewsLetterSignUpComponent.vue';
    import { onMounted, ref } from 'vue';
    import { useBlogsStore } from '../stores/BlogStore';
    import type { BlogType } from '../EntityTypes/Entities';

    const likedBlogs = ref()

     //store
    const blogsStore = useBlogsStore()

    onMounted(async()=>{
        let blogs:BlogType[] | undefined = blogsStore.getAllBlogs
        if(blogs && blogs.length > 0){
            likedBlogs.value = blogs
            return
        }

        blogs = await blogsStore.getInitialBlogs()               
        if(blogs == undefined) return  
        likedBlogs.value = blogs  
    })
    
    const HandleBlogLoad = () =>{
        console.log("load more blogs")
    }

</script>

<template>
    <UserInfoComponent/>

    <section class="w-[80%] mx-auto px-3 py-4 mt-2">
        <p class="text-2xl font-bold">Liked Blogs</p>
        <ul>
            <li v-for="blog in likedBlogs" :key="blog.Id">
                <BlogVComponent :blog="blog"/>
            </li>
        </ul>
        <section class="mt-10 mb-3 text-center">
        <button 
            @click="HandleBlogLoad"
            class="bg-gray-950 text-white text-lg px-6 py-2 rounded border-2 border-gray-950 hover:bg-gray-800 cursor-pointer w-[25%]"
        >Load More</button>
    </section>
    </section>

    <NewsLetterSignUpComponent/>
</template>

<style scoped>

</style>