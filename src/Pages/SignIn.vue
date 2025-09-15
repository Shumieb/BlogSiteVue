<script setup lang="ts">
    const showError = false;

    const HandleSubmit = () =>{
        console.log("handle submit")
    }
</script>

<template>
    <form @submit="HandleSubmit" class="w-[60%] mx-auto border-1 border-gray-500 shadow-md rounded-xl py-10 px-4 mt-10">
        <p class="text-3xl text-center font-bold mb-15">Sign In</p>        
        <div class="w-[80%] mb-8 mx-auto">
            <input 
                class="border-1 border-gray-500 w-[100%] py-2 px-2 text-xl rounded-lg"
                type="email" 
                name="email" 
                id="email"
                placeholder="Email"
               autocomplete="off"
            >
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <div class="w-[80%] mb-8 mx-auto">
            <input 
                class="border-1 border-gray-500 w-[100%] py-2 px-2 text-xl rounded-lg"
                type="password" 
                name="password" 
                id="password"
                placeholder="Password"
            >
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <div class="mb-8 mx-auto text-center">
            <input 
               type="submit"
               value="Sign Up"
               class="bg-gray-900 text-white py-4 px-8 text-lg rounded-lg cursor-pointer shadow-xl hover:shadow-2xl hover:bg-gray-800"
            >
        </div>
        <div class="mb-4">
            <p class="text-center text-lg text-gray-800">
                Do not have an account? 
                <router-link to="/signUp" class="underline">Sign Up</router-link> 
            </p>
        </div>
    </form>
</template>

<style scoped>

</style>