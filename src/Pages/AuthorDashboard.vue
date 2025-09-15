<script setup lang="ts">
    import UserInfoComponent from '../components/UserInfoComponent.vue';
    import AuthorBlogsCard from '../components/AuthorBlogsCard.vue';

</script>

<template>
    <UserInfoComponent/>

    <section class="w-[80%] mx-auto mt-8 mb-10">
        <p class="text-xl font-bold">Blogs To Submit - 2</p>
        <div class="mt-4">
            <AuthorBlogsCard :submit="true"/>
        </div>
    </section>
    <section class="w-[80%] mx-auto mt-8 mb-10">
        <p class="text-xl font-bold">Submitted Blogs Awaiting Approval - 3</p>
        <div class="mt-4">
            <AuthorBlogsCard :approval="true"/>
        </div>
    </section>
    <section class="w-[80%] mx-auto mt-8 mb-10">
        <p class="text-xl font-bold">Published Blogs - 5</p>
        <div class="mt-4">
            <AuthorBlogsCard :published="true"/>
        </div>
    </section>
</template>

<style scoped>

</style>