<script setup lang="ts">
    import AuthorTableComponent from '../components/AuthorTableComponent.vue';
    import UserInfoComponent from '../components/UserInfoComponent.vue';

</script>

<template>
    <UserInfoComponent/>

    <section class="w-[80%] mx-auto mt-8">
        <p class="text-xl font-bold">Blogs To Submit - 2</p>
        <AuthorTableComponent v-bind:submit="true"/>
    </section>
    <section class="w-[80%] mx-auto">
        <p class="text-xl font-bold">Submitted Blogs Awaiting Approval - 3</p>
         <AuthorTableComponent v-bind:approval="true"/>
    </section>
    <section class="w-[80%] mx-auto">
        <p class="text-xl font-bold">Published Blogs - 5</p>
        <AuthorTableComponent v-bind:published="true"/>
    </section>
</template>

<style scoped>

</style>