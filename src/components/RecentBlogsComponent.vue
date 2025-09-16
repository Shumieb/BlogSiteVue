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
            <section >
                <ul class="grid grid-cols-3 gap-5">
                    <li>
                        <BlogHComponent/>
                    </li>
                    <li>
                        <BlogHComponent/>
                    </li>
                    <li>
                        <BlogHComponent/>
                    </li>
                </ul>                
            </section>
        </div>
    </section>    
</template>

<style scoped>
</style>