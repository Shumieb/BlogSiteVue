<script setup lang="ts">
    import HeaderComponent from './components/HeaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
    <div>
        <HeaderComponent />
        <div class="min-h-[75vh]">
            <RouterView />
        </div>        
        <FooterComponent />
    </div>
</template>

<style scoped>

</style>
