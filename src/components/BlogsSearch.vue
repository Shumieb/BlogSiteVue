<script setup lang="ts">
    // variables
    let search = ""

    const HandleSubmit = () => {
        console.log("submit", search)
    }
</script>

<template>
  <div class="min-w-[60%]">
    <form 
        @submit.prevent="HandleSubmit" 
        method="post" 
        class="min-w-[100%] flex justify-end items-center rounded-lg"
    >
        <input 
            :v-for="search"
            type="text" 
            name="search" 
            id="search" 
            class="border-2 px-2 py-2 min-w-[100%] border-violet-950 rounded-s-lg bg-white border-e-0 outline-0"
        >
        <button
            type="submit"
            class="bg-violet-950 text-white py-2 px-4 cursor-pointer rounded-e-lg"
        >
            <i class="pi pi-search" style="font-size: 1.5rem"></i>
        </button>
    </form>
  </div>
</template>

<style scoped>

</style>