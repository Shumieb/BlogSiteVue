import { defineStore } from 'pinia'
import { ref, computed } from "vue";
import type { BlogType } from '../EntityTypes/Entities';
import { getAllBlogsData, getBlogById } from '../services/firestoreService';

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

  const getStoreBlogById = async (id: string) => {
    let blog: BlogType;
    blog = await getBlogById(id)
    if (blog) return blog
  }

  return {
    blogs,
    getAllBlogs,
    getInitialBlogs,
    getStoreBlogById
  }
})