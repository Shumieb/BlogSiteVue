import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useBlogsStore = defineStore('myBlogs', () => {
    // state properties
    const blogs = ref([]);

    // getters
    const getAllBlogs = computed(() => blogs.value);
    const getFeaturedBlogs = computed(() => blogs.value.filter(blog => blog.featured == true));
    const getRecentBlogs = computed(() => blogs.value.sort((a, b) => b.startDate - a.startDate).slice(0, 2));

    // actions


    return {
        blogs,
        getAllBlogs,
        getFeaturedBlogs,
        getRecentBlogs
    }
})