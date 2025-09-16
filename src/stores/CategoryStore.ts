import { defineStore } from 'pinia'
import { ref } from "vue";
import { Categories } from "../MockData/MockData"

export const useCategoryStore = defineStore('myCategories', () => {
    // state properties
    const categories = ref(Categories);

    // getters

    // actions
    const getCategoryById = (id: string) => {
        return categories.value.find(category => category.Id == id)
    }


    return {
        categories,
        getCategoryById
    }
})