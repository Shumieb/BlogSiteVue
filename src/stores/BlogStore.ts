import { defineStore } from 'pinia'
import { ref, computed } from "vue";
import type { BlogType } from '../EntityTypes/Entities';
import { getAllBlogsData } from '../services/firestoreService';

export const useBlogsStore = defineStore('myBlogs', () => {
  // state properties
  const blogs = ref();

  // getters
  const getAllBlogs = computed(() => blogs.value);

  // actions
  const getInitialBlogs = async () => {
    let initBlogs: BlogType[] = await getAllBlogsData()
    if (initBlogs.length > 0) {
      blogs.value = initBlogs
      return initBlogs
    }
  }



  return {
    blogs,
    getAllBlogs,
    getInitialBlogs,
  }
})