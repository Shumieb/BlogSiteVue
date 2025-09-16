<script setup lang="ts">
    import BlogVComponent from './BlogVComponent.vue';
    
   // props
   const props = defineProps(["featuredBlogs"])

</script>

<template>
    <section class="w-[80%] mx-auto px-3 py-4">
        <p class="text-xl font-bold">Featured Blogs</p>
        <section>
            <ul>
                <li v-for="blog in props.featuredBlogs" :key="blog.Id">
                    <BlogVComponent :blog="blog"/>
                </li>
            </ul>
        </section>
    </section>    
</template>

<style scoped>
</style>