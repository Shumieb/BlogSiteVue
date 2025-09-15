<script setup lang="ts">
    import BlogLikeBtnComponent from './BlogLikeBtnComponent.vue';
</script>

<template>
    <section class="rounded-lg bg-white mt-8 grid grid-cols-3 gap-2 mb-6">
        <div>
            <img 
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg" 
                alt="blog image"
                class="object-fill w-full h-full rounded-lg grayscale-25"
            >
        </div>
        <div class="px-4 pt-1 col-span-2 py-4">
            <div class="flex item-center gap-2 mt-3">
                <img 
                    src="https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg" 
                    alt="author image"
                    class="h-10 w-10 rounded-full object-fit grayscale-25"
                >
                <p class="text-gray-600 pt-1 text-xl">By Shumie</p>
            </div>
            <p class="text-lg mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                reiciendis eaque aperiam officiis magnam illum cupiditate autem harum 
                quod velit at consectetur. Et nihil quae animi accusamus maiores recusandae 
                eum velit harum rem nulla. Architecto, illum? Doloribus eaque quis, praesentium, 
                officia quidem provident, 
                reiciendis repudiandae libero nesciunt officiis itaque blanditiis non assumenda.
            </p>
            <BlogLikeBtnComponent/>    
        </div>
    </section>    
</template>

<style scoped>
</style>