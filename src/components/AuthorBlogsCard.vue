<script setup lang="ts">
    import { ref } from 'vue';

    const published=ref(false)
    const approved=ref(false)
    const submitted=ref(false)
    const withdrawn=ref(false)

</script>

<template>
    <section class="border-1 border-gray-200 rounded-md shadow-lg mb-8">
        <div class="items-center pb-1 pt-4 px-4">
            <p class="text-2xl my-3 capitalize text-center">This is blog 1</p>
            <div class="text-xl capitalize pt-1.5 flex items-center gap-4 justify-center">
                <p><b>Category:</b> nature</p>
                <p><b>Status:</b> published</p>
                <p><b>Likes:</b> 20</p>
                <p><b>Views:</b> 20</p>
                <p><b>Is Featured:</b> true</p>
            </div>           
            <div class="py-3 px-6">
                <p class="font-bold text-xl">Summary: </p>
                <p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eveniet quia? Veniam doloribus repellat quidem, nostrum corrupti distinctio laudantium et.</p>
           </div>               
           <div class="py-2 flex items-center justify-center gap-4 text-lg text-gray-400 text-wrap">
                <p><b>Created:</b> 12 December 2025</p>
                <p v-if="submitted">></p>
                <p v-if="submitted"><b>Submitted:</b> 12 December 2025</p>
                <p v-if="approved">></p>
                <p v-if="approved"><b>Approved:</b> 12 December 2025</p>
                <p v-if="published">></p>
                <p v-if="published"><b>Published:</b> 12 December 2025</p>
            </div>  
            <div class="flex justify-end items-center gap-5 py-0 my-0 text-lg">
                <router-link 
                    to="/edit-blogs/1"                             
                    class="bg-violet-900 text-white py-2 px-4 my-2 rounded-sm w-[180px] text-center"
                >Edit</router-link>
                <router-link 
                    v-if="(!published && !approved && !submitted) || withdrawn"
                    to="/edit-blogs/1"                             
                    class="bg-green-900 text-white py-2 px-4 my-2 rounded-sm w-[180px] text-center"
                >Submit</router-link>
                <router-link 
                    v-if="(published || approved || submitted) && !withdrawn"
                    to="/edit-blogs/1"                     
                    class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm w-[180px] text-center"
                >Request Withdrawal</router-link> 
                    <router-link 
                    v-if="(!published && !approved && !submitted) || withdrawn"
                    to="/edit-blogs/1"                     
                    class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm w-[180px] text-center"
                >Delete</router-link> 
            </div>         
        </div>             
    </section>
</template>


<style lang="css" scoped></style>