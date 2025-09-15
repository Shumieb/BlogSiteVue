<script setup lang="ts">
</script>

<template>
    <section class="mt-10 mb-6 grid grid-cols-2 gap-6 w-[80%] mx-auto">
        <section class="rounded-lg overflow-hidden py-2 px-3">
            <img 
                src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg" 
                alt="home hero image" 
                class="rounded-lg object-fill shadow-lg"
            >
        </section>
        <section class="flex flex-col justify-between py-3 px-3">
            <div class="mt-3">
                <p class="text-3xl">Hi, I'm Shumie</p>
                <div class="flex gap-3">
                    <i class="pi pi-arrow-right" style="font-size:1.5rem; color:gray; padding-top:8px;"></i>
                    <p class="text-3xl">Welcome to my Blog Site</p>
                </div>                
            </div>            
            <p class="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deserunt facilis aut quae alias temporibus voluptatibus, 
                quo iusto modi laborum nemo architecto perspiciatis magnam vitae, 
                nesciunt a accusantium eligendi iure rem harum. Maiores atque voluptas maxime quae. 
                Quam molestiae quos excepturi nemo, 
                asperiores, recusandae maiores ratione, non illum explicabo iure deleniti.
            </p>
            <div class="flex align-middle gap-3 mt-6">
                <a 
                    role="button"
                    target="_blank"
                    href="https://www.linkedin.com"
                    class="text-sky-800 hover:text-sky-900">
                    <i class="pi pi-linkedin" style="font-size: 1.8rem"></i>
                </a>
                <a 
                    role="button"
                    target="_blank"
                    href="https://github.com/Shumieb"
                    class="hover:text-slate-800"
                >
                    <i class="pi pi-github" style="font-size: 1.8rem"></i>
                </a>
        </div>
        </section>
    </section>
</template>

<style scoped>
</style>