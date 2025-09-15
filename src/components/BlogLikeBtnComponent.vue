<script setup lang="ts">
import { ref } from 'vue'

    let likes = ref(0);
    const HandleLike = () =>{
        likes.value += 1
    }

</script>

<template>
    <div class="py-2 mt-4 text-end">
        <button
            class="bg-gray-900 px-6 py-2 rounded-lg shadow-lg cursor-pointer"
            @click="HandleLike"
        >
            <span class="text-xl text-white me-2">{{ likes }}</span>
            <i class="pi pi-thumbs-up-fill" style="font-size: 1.2rem; color:#f5f5f5"></i>
        </button>
    </div>  
  
</template>

<style scoped>

</style>