<script setup lang="ts">
    import { onBeforeMount, ref } from 'vue';
    import BlogSummaryComponent from './BlogSummaryComponent.vue';
    import { getFormattedDate } from '../utils/HelperFunctions';

    // props
    const props = defineProps(["blog"])

     // variables
    const dateToDisplay = ref("")
    
    // run on component initiation
    onBeforeMount(()=>{
        // format date
        dateToDisplay.value = getFormattedDate(props.blog.publishedDate.toDate())
    })

</script>

<template>
    <section class="mb-4 w-[80%] mx-auto px-2 py-2">
        <p class="text-2xl text-center font-bold capitalize">{{props.blog.title}}</p>
        <p class="text-lg text-gray-600 text-center">Published: {{dateToDisplay}}</p>
        <div class="mt-6">
            <BlogSummaryComponent :blog="props.blog"/>
        </div>
        <p class="bg-gray-900 text-xl text-white px-6 py-2 rounded-sm mb-3 capitalize">
            {{props.blog.Category.name}}
        </p>
        <p class="text-lg py-2 mb-6">{{ props.blog.content }}
            
        </p>
        <p class="text-center text-gray-700">End of Blog</p>
        <p class="text-center text-gray-700">Thank you for taking the time to read this blog.</p>
        <p class="text-center pt-2 text-gray-700"><i class="pi pi-face-smile" style="font-size: 1.2rem"></i></p>

    </section>
</template>

<style lang="css" scoped></style>