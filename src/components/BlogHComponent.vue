<script setup lang="ts">
    import BlogLikesComponent from './BlogLikesComponent.vue';

</script>

<template>
    <section class="rounded-lg bg-white mt-4 border-1 border-gray-300">
        <div>
            <img 
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg" 
                alt="blog image"
                class="object-fill rounded-t-lg grayscale-25"
            >
        </div>
        <div class="px-4 py-6">
            <router-link 
                to="/blogs/1" 
                class="text-2xl hover:underline decoration-violet-900"
            >Blog title</router-link>
            <div class="flex align-baseline mb-5 text-gray-600 gap-2 pt-1">
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
            <div class="flex justify-between items-center">
                <div class="flex item-center gap-2 mt-5">
                    <img 
                        src="https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg" 
                        alt="author image"
                        class="h-10 w-10 rounded-full object-fit grayscale-25"
                    >
                    <p class="text-gray-600 pt-3">by Shumie</p>
                </div>
                <BlogLikesComponent/>
            </div>            
        </div>
    </section>
</template>

<style scoped>
</style>