<script setup lang="ts">
    defineProps<{
        submit?:boolean,
        approval?:boolean,
        published?:boolean
    }>()
</script>

<template>
    <table class="border-gray-400 w-[100%] mt-2 mb-6 table-auto">
        <thead class="bg-violet-300 ">
            <tr class="border border-gray-400">
                <th class="text-xl w-[40%] py-2">Title</th>
                <th class="text-xl py-2">Created</th>
                <th 
                    v-if="submit==false"
                    class=" text-xl py-2"
                >Submitted</th>
                <th 
                    class="text-xl py-2"
                    v-if="published"
                >Published</th>
                <th class=" text-xl py-2"></th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-center border border-gray-400">
                <td class="text-lg">This is blog 1</td>
                <td class="text-lg">12 December 2025</td>
                <td 
                    v-if="submit==false"
                    class="text-lg"
                >12 December 2025</td>
                <td 
                    v-if=published
                    class="text-lg"
                >12 December 2025</td>
                <td class="text-lg py-3">
                     <router-link 
                            to="/edit-blogs/1" 
                             v-if=submit
                            class="bg-green-900 text-white py-2 px-4 my-2 rounded-sm"
                        >Submit</router-link>
                    <div class="flex justify-center items-center gap-5 py-0 my-0">
                        <p 
                            v-if=approval 
                            class="my-0 bg-violet-900 text-white py-2 px-2 rounded-sm"
                        >Awaiting Approval</p>
                        <router-link 
                            to="/edit-blogs/1" 
                            v-if=approval
                            class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm"
                        >Withdraw</router-link>
                    </div>      
                        <div class="flex justify-center items-center gap-5 py-0 my-0">
                        <router-link 
                            to="/edit-blogs/1" 
                            v-if=published
                            class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm"
                        >Request Withdrawal</router-link>
                    </div>       
                </td>
            </tr>
            <tr class="text-center border border-gray-400">
                <td class="text-lg">This is blog 2</td>
                <td class="text-lg">12 December 2025</td>
                <td     
                    v-if="submit==false" 
                    class="text-lg"
                >12 December 2025</td>
                <td 
                    v-if=published
                    class="text-lg"
                >12 December 2025</td>
                <td class="text-lg py-3">
                     <router-link 
                            to="/edit-blogs/1" 
                             v-if=submit
                            class="bg-green-900 text-white py-2 px-4 my-2 rounded-sm"
                        >Submit</router-link>
                    <div class="flex justify-center items-center gap-5 py-0 my-0">
                        <p 
                            v-if=approval
                            class="my-0 bg-violet-900 text-white py-2 px-2 rounded-sm"
                        >Awaiting Approval</p>
                         <router-link 
                            to="/edit-blogs/1" 
                            v-if=approval
                            class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm"
                        >Withdraw</router-link>
                    </div>                    
                    <div class="flex justify-center items-center gap-5 py-0 my-0">
                        <router-link 
                            to="/edit-blogs/1" 
                            v-if=published
                            class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm"
                        >Request Withdrawal</router-link>
                    </div>  
                </td>
            </tr>
            <tr class="text-center border border-gray-400">
                <td class="text-lg">This is blog 3</td>
                <td class="text-lg">12 July 2025</td>
                <td 
                    v-if="submit==false"
                    class="text-lg"
                >12 December 2025</td>
                <td 
                    v-if=published
                    class="text-lg"
                >12 December 2025</td>
                <td class="text-lg py-3">
                    <router-link 
                            to="/edit-blogs/1" 
                             v-if=submit
                            class="bg-green-900 text-white py-2 px-4 my-2 rounded-sm"
                        >Submit</router-link>
                    <div class="flex justify-center items-center gap-5 py-0 my-0">
                        <p 
                            v-if=approval
                            class="my-0 bg-violet-900 text-white py-2 px-2 rounded-sm"
                        >Awaiting Approval</p>
                         <router-link 
                            to="/edit-blogs/1" 
                            v-if=approval
                            class="bg-red-800 text-white py-2 px-3 my-2 rounded-sm"
                        >Withdraw</router-link>
                    </div>   
                    <div class="flex justify-center items-center gap-5 py-0 my-0">
                        <router-link 
                            to="/edit-blogs/1" 
                            v-if=published
                            class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm"
                        >Request Withdrawal</router-link>
                    </div>                
                </td>
            </tr>
        </tbody>
</table>

</template>

<style scoped>
</style>