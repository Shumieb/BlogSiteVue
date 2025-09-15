<script setup lang="ts">
    defineProps<{
        submit?:boolean,
        approval?:boolean,
        published?:boolean
    }>()
</script>

<template>
    <section 
        class="border-1 border-gray-500 rounded-md shadow-lg"
    >
        <div class="items-center py-1 px-4">
            <p class="text-xl mt-3 font-bold mb-2">This is blog 1</p>
            <div class="py-1 flex items-center gap-4">
                <p class="text-lg">Created: 12 December 2025</p>
                <p v-if="submit==false" class="text-lg">></p>
                <p v-if="submit==false" class="text-lg">Submitted: 12 December 2025</p>
                <p v-if="published" class="text-lg">></p>
                <p v-if=published class="text-lg">Published: 12 December 2025</p>
            </div> 
            <div class="text-lg py-1">
                <div v-if=submit class="flex justify-end items-center gap-5 py-0 my-0">
                    <router-link 
                        to="/edit-blogs/1"                             
                        class="bg-green-900 text-white py-2 px-4 my-2 rounded-sm"
                    >Submit</router-link>
                    <router-link 
                        to="/edit-blogs/1"                     
                        class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm"
                    >Delete Blog</router-link> 
                </div>
                <div v-if=approval class="flex justify-end items-center gap-5 py-0 my-0">
                    <p class="my-0 bg-violet-900 text-white py-2 px-2 rounded-sm"
                    >Awaiting Approval</p>
                    <router-link 
                        to="/edit-blogs/1" 
                        class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm"
                    >Request Withdraw</router-link>
                </div>    
                <div v-if=published class="flex justify-end items-center gap-5 py-0 my-0">
                    <p class="my-0 bg-violet-900 text-white py-2 px-2 rounded-sm"
                    >Awaiting Withdrawal</p> 
                    <router-link 
                        to="/edit-blogs/1"                     
                        class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm"
                    >Request Withdrawal</router-link> 
                </div>         
            </div>
        </div>             
    </section>
</template>


<style lang="css" scoped></style>