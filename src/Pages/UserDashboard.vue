<script setup lang="ts">
    import BlogVComponent from '../components/BlogVComponent.vue';
    import UserInfoComponent from '../components/UserInfoComponent.vue';
    
    const HandleBlogLoad = () =>{
        console.log("load more blogs")
    }

</script>

<template>
    <UserInfoComponent/>

    <section class="w-[80%] mx-auto px-3 py-4 mt-4">
        <p class="text-xl font-bold">Liked Blogs</p>
        <div>
            <BlogVComponent/>
            <BlogVComponent/>
            <BlogVComponent/>
            <BlogVComponent/>
        </div>
        <section class="mt-4 mb-8 text-center">
        <button 
            @click="HandleBlogLoad"
            class="bg-gray-950 text-white text-lg px-6 py-2 rounded border-2 border-gray-950 hover:bg-gray-800 cursor-pointer w-[25%]"
        >Load More</button>
    </section>
    </section>
</template>

<style scoped>

</style>