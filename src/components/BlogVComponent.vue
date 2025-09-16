<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useAuthorStore } from '../stores/AuthorStore';
    import { useCategoryStore } from '../stores/CategoryStore';
    import BlogLikesComponent from './BlogLikesComponent.vue';
    import {getFormattedDate} from '../utils/HelperFunctions'

    // props
    const props = defineProps(["blog"])

    // variables
    const authorName = ref("")
    const categoryName = ref("")
    const dateToDisplay = ref("")
    const displaySummary = ref("")

    // store
    const authorStore = useAuthorStore()
    const categoryStore = useCategoryStore()

    // run on component initiation
    onMounted(()=>{
        // set author and category
        let author = authorStore.getAuthorById(props.blog.authorId)
        let category =categoryStore.getCategoryById(props.blog.categoryId)
        author && (authorName.value = author.name)
        category && (categoryName.value = category.name)
        // format date
        dateToDisplay.value = getFormattedDate(props.blog.createdDate)
        // display summary
        if(props.blog.summary.trim().length > 250){
            displaySummary.value = props.blog.summary.substring(0,250) + "..."
        }else{
            displaySummary.value = props.blog.summary
        }
    })
</script>

<template>
    <section class="rounded-lg bg-white mt-8 grid grid-cols-3 gap-3 shadow-lg mb-6 border-1 border-gray-300">
        <div>
            <img 
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg" 
                alt="blog image"
                class="object-fill w-full h-full rounded-s-lg grayscale-25"
            >
        </div>
        <div class="px-4 pt-4 col-span-2 py-4">
            <router-link 
                to="/blogs/1" 
                class="text-2xl hover:underline decoration-violet-900 capitalize"
            >{{props.blog.title}}</router-link>
            <div class="flex align-baseline mb-3 text-gray-600 gap-2 pt-1">
                <p>{{dateToDisplay}}</p>
                <p>|</p>
                <p class="capitalize">{{categoryName}}</p>
            </div>
            <p class="text-lg">
                {{ displaySummary }}
            </p>
            <div class="flex justify-between items-center">
                <div class="flex item-center gap-2 mt-3">
                    <img 
                        src="https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg" 
                        alt="author image"
                        class="h-12 w-12 rounded-full object-fit grayscale-25"
                    >
                    <p class="text-gray-600 pt-3 capitalize">{{authorName}}</p>
                </div>
                <BlogLikesComponent :likes="props.blog.likes"/>
            </div>
            
        </div>
    </section>    
</template>
