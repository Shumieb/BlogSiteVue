<script setup lang="ts">
    import BlogVComponent from './BlogVComponent.vue';
</script>

<template>
    <section class="w-[80%] mx-auto px-3 py-4">
        <p class="text-xl font-bold">Featured Blogs</p>
        <section>
            <BlogVComponent/>
            <BlogVComponent/>
            <BlogVComponent/>
            <BlogVComponent/>
        </section>
    </section>    
</template>

<style scoped>
</style>