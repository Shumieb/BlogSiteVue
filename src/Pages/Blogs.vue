<script setup lang="ts">
    import BlogsSearch from '../components/BlogsSearch.vue';  
</script>

<template>
    <section class="w-[80%] mx-auto px-2 py-2 flex justify-between items-center">
        <p class="text-3xl">Blogs</p>
        <div class="min-w-[40%] flex justify-end">
           <BlogsSearch/>
        </div>

    </section>
</template>

<style scoped>

</style>