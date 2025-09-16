import { defineStore } from 'pinia'
import { ref, computed } from "vue";
import { MockBlogs } from "../MockData/MockData"

export const useBlogsStore = defineStore('myBlogs', () => {
  // state properties
  const blogs = ref(MockBlogs);

  // getters
  const getAllBlogs = computed(() => blogs.value);
  const getFeaturedBlogs = computed(() => blogs.value.filter(b => b.isFeatured == true))


  // actions
  return {
    blogs,
    getAllBlogs,
    getFeaturedBlogs
  }
})