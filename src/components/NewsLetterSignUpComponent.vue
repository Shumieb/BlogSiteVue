<script setup lang="ts">
    // variables
    const email = "";

    // functions
    const HandleSubmit =()=>{
        console.log("submit")
    }
</script>

<template>
    <section class="bg-violet-200 py-8">
        <div class="w-[80%] mx-auto">
            <p class="text-center text-2xl">Sign Up for out Awesome NewsLetter</p>
            <p class="text-center text-lg text-gray-600 w-[50%] text-wrap mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <div class="mx-auto">
                <form 
                   @submit.prevent="HandleSubmit" 
                    class="flex justify-center flex-col items-center"
                >
                <div class="w-[100%] flex justify-center">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        :v-bind="email" 
                        class="bg-white px-6 text-lg outline-0 rounded py-3 my-4 w-[50%] mx-auto"
                    >
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Sign Up" 
                        class="bg-violet-900 text-white py-2 px-8 text-lg rounded cursor-pointer hover:bg-violet-800"
                    >
                </div>                  
                </form>
            </div>
        </div>      
    </section>    
</template>

<style scoped>
</style>