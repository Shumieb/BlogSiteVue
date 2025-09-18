<script setup lang="ts">
    import { ref, onBeforeMount } from 'vue';
    import BlogsSearch from '../components/BlogsSearch.vue';  
    import BlogVComponent from '../components/BlogVComponent.vue';
    import NewsLetterSignUpComponent from '../components/NewsLetterSignUpComponent.vue';
    import { useBlogsStore } from '../stores/BlogStore';
    import type { BlogType } from '../EntityTypes/Entities';

     // variables
    const fetchedBlogs = ref()

    //store
    const blogsStore = useBlogsStore()

    onBeforeMount(async()=>{
        let blogs:BlogType[] | undefined = blogsStore.getAllBlogs
        if(blogs && blogs.length > 0){
            fetchedBlogs.value = blogs
            return
        }

        blogs = await blogsStore.getInitialBlogs()               
        if(blogs == undefined) return  
        fetchedBlogs.value = blogs  
    })

    const HandleBlogLoad = () =>{
        console.log("load more blogs")
    }

</script>

<template>
    <section class="w-[80%] mx-auto px-2 py-1 flex justify-between items-center">
        <p class="text-3xl">Blogs</p>
        <div class="min-w-[40%] flex justify-end">
           <BlogsSearch/>
        </div>
    </section>
    <section class="w-[80%] mx-auto px-2 py-1">
        <ul>
            <li v-for="blog in fetchedBlogs" :key="blog.Id">
                <BlogVComponent :blog="blog"/>
            </li>
        </ul>
    </section>
    <section class="mt-4 mb-8 text-center">
        <button 
            @click="HandleBlogLoad"
            class="bg-gray-950 text-white text-lg px-6 py-2 rounded border-2 border-gray-950 hover:bg-gray-800 cursor-pointer w-[25%]"
        >Load More</button>
    </section>
    <NewsLetterSignUpComponent/>
</template>

<style scoped>

</style>