<script setup lang="ts">
    
</script>

<template>
    <section class="w-[80%] mx-auto gap-3 mt-10 flex flex-col justify-center items-center">
        <div>
            <img 
                src="https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg" 
                alt="userImg"
                class="rounded-full w-80 h-80"
            >
        </div>
        <div class="text-center">
            <p class="text-2xl font-bold">
                User name
                <router-link 
                    to="/edit-userInfo/1"
                    class="cursor-pointer mx-1"
                >
                    <i class="pi pi-pen-to-square" style="font-size: 1.2rem;"></i>
            </router-link>
            </p>
            <p class="text-lg text-gray-800">Username@gmail.com</p>
            <p class="text-lg text-gray-800">Member since: June 2025</p>
            <p class="text-lg text-gray-800">Membership status: Active</p>
        </div>        
    </section>
</template>

<style scoped>
</style>