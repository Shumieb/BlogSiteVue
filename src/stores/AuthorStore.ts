import { defineStore } from 'pinia'
import { ref } from "vue";
import { MockAuthors } from "../MockData/MockData"

export const useAuthorStore = defineStore('myAuthors', () => {
    // state properties
    const authors = ref(MockAuthors);

    // getters

    // actions
    const getAuthorById = (id: string) => {
        return authors.value.find(author => author.Id == id)
    }


    return {
        authors,
        getAuthorById
    }
})