import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useBlogsStore = defineStore('myBlogs', () => {
  // state properties
  const blogs = ref();

  // getters
  const getAllBlogs = computed(() => blogs.value);

  // actions



  return {
    blogs,
    getAllBlogs,
  }
})