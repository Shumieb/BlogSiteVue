<script setup lang="ts">
    import HeaderComponent from './components/HeaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
    <div>
        <HeaderComponent />
        <main class="min-h-[75vh]">
            <RouterView />
        </main>        
        <FooterComponent />
    </div>
</template>

<style scoped>

</style>
