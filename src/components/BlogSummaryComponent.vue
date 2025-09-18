<script setup lang="ts">
    import { onBeforeMount, ref } from 'vue';
    import BlogLikeBtnComponent from './BlogLikeBtnComponent.vue';
    import BlogViewsComponent from './BlogViewsComponent.vue';

    // props
    const props = defineProps(["blog"])   

      // variables
    const displaySummary = ref("")
    
    // run on component initiation
    onBeforeMount(()=>{
        // display summary
        if(props.blog.summary.trim().length > 250){
            displaySummary.value = props.blog.summary.substring(0,250) + "..."
        }else{
            displaySummary.value = props.blog.summary
        }
    })

</script>

<template>
    <section class="rounded-lg bg-white mt-8 grid grid-cols-3 gap-2 mb-6">
        <div>
            <img 
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg" 
                alt="blog image"
                class="object-fill w-full h-full rounded-lg grayscale-25"
            >
        </div>
        <div class="px-4 pt-1 col-span-2 py-4">
            <div class="flex item-center gap-2 mt-3">
                <img 
                    src="https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg" 
                    alt="author image"
                    class="h-10 w-10 rounded-full object-fit grayscale-25"
                >
                <p class="text-gray-600 pt-1 text-xl capitalize">By {{props.blog.Author.userName}}</p>
            </div>
            <p class="text-lg mt-4">{{displaySummary}}</p>
            <div class="flex justify-between items-center">
                <BlogViewsComponent :views="props.blog.views" />
                <BlogLikeBtnComponent :likes="props.blog.likes"/>                
            </div>
        </div>
    </section>    
</template>

<style scoped>
</style>