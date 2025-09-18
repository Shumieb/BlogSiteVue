<script setup lang="ts">
    import HomeTitleComponent from '../components/HomeTitleComponent.vue';
    import RecentBlogsComponent from '../components/RecentBlogsComponent.vue';
    import FeaturedBlogsComponent from '../components/FeaturedBlogsComponent.vue';
    import NewsLetterSignUpComponent from '../components/NewsLetterSignUpComponent.vue';
    import { onMounted, ref } from 'vue';
    import { useBlogsStore } from '../stores/BlogStore';
    import type { BlogType } from '../EntityTypes/Entities';
   
    // variables
    const recentBlogs = ref()
    const featuredBlogs = ref()

    //store
    const blogsStore = useBlogsStore() 
    
    onMounted(async()=>{
        let blogs:BlogType[] | undefined = blogsStore.getAllBlogs

        // check if there are blogs is the store and get the blog data
        if(blogs && blogs.length > 0){
            // set featured data
            featuredBlogs.value = blogs.filter(b=> b.isFeatured)
            // set recent blogs
            recentBlogs.value = blogs.sort().slice(0,3)
            return
        }

        // runs if the store is empty
        // get blogs from database
        blogs = await blogsStore.getInitialBlogs()               
        if(blogs == undefined) return                
        // set featured data
        featuredBlogs.value = blogs.filter(b => b.isFeatured)
        // set recent blogs
        recentBlogs.value = blogs.sort().slice(0,3)
    }) 
</script>

<template>
    <section>
        <HomeTitleComponent/>
        <RecentBlogsComponent :recentBlogs="recentBlogs"/>
        <FeaturedBlogsComponent :featuredBlogs="featuredBlogs"/>
        <NewsLetterSignUpComponent/>
    </section>   
</template>

<style scoped>
</style>