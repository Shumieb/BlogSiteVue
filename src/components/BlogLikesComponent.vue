<script setup lang="ts">
    let likes:number = 0;
</script>

<template>
    <div class="flex justify-end items-center gap-2 pt-4">
        <p class="text-gray-600 text-lg">{{likes}}</p>
        <p><i class="pi pi-thumbs-up-fill" style="font-size: 1rem"></i></p>
    </div>
</template>

<style scoped>

</style>