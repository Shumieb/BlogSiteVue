<script setup lang="ts">
    import FileUpload from 'primevue/fileupload';
    
    const showError = false;
    const editing = true;
    const admin = false;
    const submitted = true;
    const approved = true;
    const awaitingWithdrawal = false;
    const published = true;
    const isFeatured=false;
    const selected = ""

    const HandleSubmit = () =>{
        console.log("handle submit")
    }

    const onUpload = () =>{
        console.log("on onupload")
    }

    
</script>

,<template>
    <form @submit.prevent="HandleSubmit" class="w-[60%] mx-auto border-1 border-gray-500 shadow-md rounded-xl py-10 px-4 mt-10">
        <p class="text-3xl text-center font-bold mb-15">
            {{ editing ? "Editing Blog" : "Add New Blog" }}
        </p>
        <div class="w-[80%] mb-8 mx-auto">
            <input 
                class="border-1 border-gray-500 py-2 px-2 text-xl rounded-lg w-[100%]"
                type="text" 
                name="title" 
                id="title"
                placeholder="Blog Title"
            >
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <div class="w-[80%] mb-8 mx-auto">
            <select 
                name="category"  
                id="category"
                v-model="selected"
                class="w-[100%] border-1 border-gray-500 py-2 px-2 text-xl rounded-lg"
            >
                <option value="">Select A Category</option>
                <option value="nature">Nature</option>
                <option value="adventure">Adventure</option>
                <option value="news">News</option>
                <option value="fashion">Fashion</option>
                <option value="beauty">Beauty</option>
            </select>
        </div>
        <div class="w-[80%] mb-8 mx-auto">
            <FileUpload 
                style="background-color: black; color: antiquewhite; margin-right: 15px; padding: 8px; border-radius: 10px; font-size: 18px;"
                ref="fileupload" 
                mode="basic" 
                name="blog-image" 
                url="/api/upload" 
                accept="image/*" 
                @upload="onUpload" 
                choose-label="Upload Image"
                choose-icon=" "
            />            
        </div>
        <div class="w-[80%] mb-8 mx-auto">
            <div class="">
                <p class="text-xl mb-2"><b>Featured Status:</b> Not Featured</p>
                <button 
                    v-if="isFeatured"
                    type="button"
                    class="bg-pink-900 text-white text-xl px-6 py-2 rounded-md cursor-pointer"
                >Remove Feature</button>
                <button 
                    v-if="!isFeatured"
                    type="button"
                     class="bg-gray-900 text-white text-xl px-6 py-2 rounded-md cursor-pointer"
                >Feature</button>
            </div>            
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <div class="w-[80%] mb-8 mx-auto">
            <textarea 
                rows="4" cols="50"
                class="border-1 border-gray-500 w-[100%] py-2 px-2 text-xl rounded-lg"
                name="summary" 
                id="Summary"
                placeholder="Summary"
            />
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <div class="w-[80%] mb-8 mx-auto">
            <textarea 
                rows="10" cols="50"
                class="border-1 border-gray-500 w-[100%] py-2 px-2 text-xl rounded-lg"
                name="content" 
                id="content"
                placeholder="Main Content"
            />
            <p v-if="showError" class="text-pink-900 font-bold px-2">Error</p>
        </div>
        <!--------Status ---------->
        <p v-if="!awaitingWithdrawal" class="text-2xl text-center">
            <b>Current Status:</b> {{ editing ? "Awaiting Approval": "New Blog" }}
        </p>
        <p v-if="awaitingWithdrawal" class="text-2xl text-center text-red-950">
            <b>Current Status:</b> Awaiting Withdrawal
        </p>
        <!--------Dates ---------->
        <div class="flex justify-center items-center flex-wrap w-[80%] mx-auto mt-2 mb-2">
            <p v-if="editing" class="text-lg text-center text-gray-600 me-6">Created: 12 June 2025</p>
            <p v-if="submitted" class="text-lg text-center text-gray-600 me-6">Submitted: 12 June 2025</p>
            <p v-if="approved" class="text-lg text-center text-gray-600 me-6">Approved: 12 June 2025</p>
            <p v-if="published" class="text-lg text-center text-gray-600 me-6">Published: 12 June 2025</p>
            <p v-if="awaitingWithdrawal" class="text-lg text-center text-gray-600 me-6">Withdrawal Request Sent: 12 June 2025</p>
        </div>
        <!--------Change Status Buttons ---------->
        <p class="text-lg text-center mt-2">Use the buttons below to change the status</p>
        <div class="mb-4 mx-auto flex justify-center items-center gap-4">
                <button 
                    type="submit"
                    v-if="!admin && !awaitingWithdrawal"
                    class="bg-green-900 text-white py-2 px-4 my-2 rounded-sm text-lg cursor-pointer"
                >Submit For Approval</button>
                <button
                    type="submit"
                    v-if="admin && !awaitingWithdrawal"
                    class="bg-green-900 text-white py-2 px-4 my-2 rounded-sm text-lg cursor-pointer"
                >Publish</button>
                <button
                    type="submit"
                    v-if="admin && awaitingWithdrawal"
                    class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm text-lg cursor-pointer"
                >Withdraw</button>
                <button
                    type="submit"
                    v-if="editing && !admin && !awaitingWithdrawal"
                    class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm text-lg cursor-pointer"
                >Request Withdrawal</button>
        </div> 
    </form>    

</template>

<style scoped>
    input[type=checkbox]
    {
        /* Double-sized Checkboxes */
        -ms-transform: scale(2); /* IE */
        -moz-transform: scale(2); /* FF */
        -webkit-transform: scale(2); /* Safari and Chrome */
        -o-transform: scale(2); /* Opera */
        transform: scale(2);
        padding: 10px;
        accent-color: rgb(47, 45, 45);
    }
</style>