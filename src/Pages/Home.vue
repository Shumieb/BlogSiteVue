<script setup lang="ts">
    import HomeTitleComponent from '../components/HomeTitleComponent.vue';
    import RecentBlogsComponent from '../components/RecentBlogsComponent.vue';
    import FeaturedBlogsComponent from '../components/FeaturedBlogsComponent.vue';
    import NewsLetterSignUpComponent from '../components/NewsLetterSignUpComponent.vue';
    import { onMounted, ref } from 'vue';
    import { useBlogsStore } from '../stores/BlogStore';
    import { MockBlogs } from '../MockData/MockData';
   
    // variables
    const recentBlogs = ref()
    const featuredBlogs = ref()

    //store
    const blogsStore = useBlogsStore()    
    
    onMounted(()=>{
        // update store
         blogsStore.blogs = MockBlogs
         // set featured data
         featuredBlogs.value = MockBlogs.filter(b => b.isFeatured)
         // set recent blogs
         recentBlogs.value = MockBlogs.sort((a,b)=>Number(b.Id) - Number(a.Id)).slice(0,3)        
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