<script setup lang="ts">
    const props = defineProps(["views"])
</script>

<template>
    <div class="flex justify-end items-center gap-2 pt-4">
        <p class="text-gray-600 text-lg">{{props.views}}</p>
        <p class="pt-1.5"><i class="pi pi-eye" style="font-size: 1.2rem"></i></p>
    </div>
</template>

<style scoped>

</style>