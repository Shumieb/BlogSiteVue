<script setup lang="ts">
</script>

<template>
    <section class="rounded-lg bg-white mt-8 grid grid-cols-3 gap-6 shadow-lg mb-6">
        <div>
            <img 
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg" 
                alt="blog image"
                class="object-fill w-full h-full rounded-s-lg grayscale-25"
            >
        </div>
        <div class="px-3 pt-1 col-span-2 py-4">
            <router-link 
                to="/blog/1" 
                class="text-2xl hover:underline decoration-violet-900"
            >This is one awesome blog</router-link>
            <div class="flex align-baseline mb-3 text-gray-600 gap-2">
                <p>12 June 2025</p>
                <p>|</p>
                <p>nature</p>
            </div>
            <p class="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                reiciendis eaque aperiam officiis magnam illum cupiditate autem harum 
                quod velit at consectetur. Et nihil quae animi accusamus maiores recusandae 
                eum velit harum rem nulla. Architecto, illum? Doloribus eaque quis, praesentium, 
                officia quidem provident, 
                reiciendis repudiandae libero nesciunt officiis itaque blanditiis non assumenda.
            </p>
            <div class="flex align-middle gap-2 mt-3">
                <img 
                    src="https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg" 
                    alt="author image"
                    class="h-12 w-12 rounded-full object-fit grayscale-25"
                >
                <p class="text-gray-600 pt-3">by Shumie</p>
            </div>
        </div>
    </section>    
</template>

<style scoped>
</style>