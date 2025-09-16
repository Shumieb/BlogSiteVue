<script setup lang="ts">
    import BlogVComponent from './BlogVComponent.vue';
    import { onMounted, ref } from "vue";
    import { useBlogsStore } from '../stores/BlogStore';

    //variable
    const featuredBlogs = ref()

     //store
    const blogsStore = useBlogsStore()
    //console.log(store.getFeaturedBlogs)

    onMounted(()=>{
        featuredBlogs.value = blogsStore.getFeaturedBlogs
    })

</script>

<template>
    <section class="w-[80%] mx-auto px-3 py-4">
        <p class="text-xl font-bold">Featured Blogs</p>
        <section>
            <ul>
                <li v-for="blog in featuredBlogs" :key="blog.Id">
                    <BlogVComponent :blog="blog"/>
                </li>
            </ul>
        </section>
    </section>    
</template>

<style scoped>
</style>