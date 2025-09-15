<script setup lang="ts">
    import BlogsSearch from '../components/BlogsSearch.vue';  
    import BlogVComponent from '../components/BlogVComponent.vue';
    import NewsLetterSignUpComponent from '../components/NewsLetterSignUpComponent.vue';

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
        <BlogVComponent/>
        <BlogVComponent/>
        <BlogVComponent/>
        <BlogVComponent/>
        <BlogVComponent/>
        <BlogVComponent/>
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