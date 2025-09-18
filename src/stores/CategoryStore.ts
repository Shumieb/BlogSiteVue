import { defineStore } from 'pinia'
import { ref } from "vue";
import type { CategoryType } from '../EntityTypes/Entities';

export const useCategoryStore = defineStore('myCategories', () => {
    // state properties
    const categories = ref();

    // getters

    // actions
    const getCategoryById = async (id: string) => {
        let category: CategoryType = await categories.value.find(
            (category: { Id: string; name: string; description: string }) => category.Id == id)
        return category
    }


    return {
        categories,
        getCategoryById
    }
})