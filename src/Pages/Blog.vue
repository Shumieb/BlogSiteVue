<script setup lang="ts">
    import NewsLetterSignUpComponent from '../components/NewsLetterSignUpComponent.vue';
    import { ref, onBeforeMount } from 'vue';
    import { useBlogsStore } from '../stores/BlogStore';
    import { useRoute } from 'vue-router'
    import type { BlogType } from '../EntityTypes/Entities';
    import BlogInfoComponent from '../components/BlogInfoComponent.vue';

    // variables
    const blogToDisplay = ref()
    const loading = ref(true)

    // param
    const route = useRoute()
    const id = route.params.id as string

    //store
    const blogsStore = useBlogsStore()

    onBeforeMount(async()=>{
        loading.value = true
        let blogs:BlogType[] | undefined = blogsStore.getAllBlogs
        let blog: BlogType | undefined;
       
        // check is there are blogs in the store 
        if(blogs && blogs.length > 0){
            blog = blogs.find(b=>b.Id == id)
            if(blog == undefined){
                console.log("not found")
            }else{
                blogToDisplay.value = blog
                loading.value = false
               return
            }
        }

        // run if there are no blogs in the store
        blog = await blogsStore.getStoreBlogById(id)
        if(blog == undefined){
            console.log("not found")
        }else{
            blogToDisplay.value = blog
            loading.value = false
            return
        }
    })

</script>

<template>
    <BlogInfoComponent v-if="!loading" :blog="blogToDisplay"/>
    <NewsLetterSignUpComponent/>
</template>

<style scoped>

</style>