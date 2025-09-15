<script setup lang="ts">
    import BlogHComponent from './BlogHComponent.vue';
</script>

<template>
    <section class="bg-violet-200 py-5">
        <div class="w-[80%] mx-auto px-3">
            <div class="flex justify-between mb-1">
                <p class="text-xl font-bold">Recent blogs</p>
                <router-link 
                    to="/blogs" 
                    class="text-xl hover:underline decoration-violet-900"
                >View Blogs</router-link> 
            </div>
            <section class="grid grid-cols-3 gap-5">
                <BlogHComponent/>
                <BlogHComponent/>
                <BlogHComponent/>
            </section>
        </div>
    </section>    
</template>

<style scoped>
</style>