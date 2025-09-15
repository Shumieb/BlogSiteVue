<script setup lang="ts">
    const showError = false;
    const activeMember = true;

    const HandleSubmit = () =>{
        console.log("handle submit")
    }
</script>

<template>
    <form @submit.prevent="HandleSubmit" class="w-[60%] mx-auto border-1 border-gray-500 shadow-md rounded-xl py-10 px-4 mt-10">
        <p class="text-3xl text-center font-bold mb-15">
            Edit Profile
        </p>
        <div class="w-[80%] mb-8 mx-auto">
            <input 
                class="border-1 border-gray-500 py-2 px-2 text-xl rounded-lg w-[100%]"
                type="text" 
                name="userName" 
                id="userName"
                placeholder="User Name"
            >
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <div class="w-[80%] mb-8 mx-auto">
            <input 
                class="border-1 border-gray-500 py-2 px-2 text-xl rounded-lg w-[100%]"
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
                class="border-1 border-gray-500 py-2 px-2 text-xl rounded-lg w-[100%]"
                type="password" 
                name="password" 
                id="password"
                placeholder="Password"
            >
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <div class="w-[80%] mb-8 mx-auto">
            <div class="text-center">
                <p class="text-xl mb-2"><b>Membership Status:</b> Active</p>
                <button 
                    v-if="activeMember"
                    type="button"
                    class="bg-pink-900 text-white text-xl px-6 py-2 rounded-md cursor-pointer"
                >Deactivate Membership</button>
                <button 
                    v-if="!activeMember"
                    type="button"
                     class="bg-gray-900 text-white text-xl px-6 py-2 rounded-md cursor-pointer"
                >Activate Membership</button>
            </div>            
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <div class="mb-8 mx-auto text-center">
            <input 
               type="submit"
               value="Save Changes"
               class="bg-gray-900 text-white py-4 px-8 text-lg rounded-lg cursor-pointer shadow-xl hover:shadow-2xl hover:bg-gray-800"
            >
        </div>

    </form>
</template>

