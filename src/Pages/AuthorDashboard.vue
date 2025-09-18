<script setup lang="ts">
    import UserInfoComponent from '../components/UserInfoComponent.vue';
    import AuthorBlogsCard from '../components/AuthorBlogsCard.vue';
</script>

<template>
    <UserInfoComponent/>

    <section class="w-[80%] mx-auto mt-8 mb-10">
        <p class="text-xl font-bold">My Blogs</p>
        <div class="mt-4">
            <AuthorBlogsCard/>
            <AuthorBlogsCard/>
        </div>
    </section>
</template>

<style scoped>

</style>