<script setup lang="ts">
    import NewsLetterSignUpComponent from '../components/NewsLetterSignUpComponent.vue';
    import BlogSummaryComponent from '../components/BlogSummaryComponent.vue';
</script>

<template>
    <section class="mb-4 w-[80%] mx-auto px-2 py-2">
        <p class="text-2xl text-center font-bold">This is blog one</p>
        <p class="text-lg text-gray-600 text-center">Published: 12 June 2025</p>
        <div class="mt-6">
            <BlogSummaryComponent/>
        </div>
        <p class="bg-gray-900 text-xl text-white px-6 py-2 rounded-sm mb-3">Nature</p>
        <p class="text-lg py-2 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos, vel dolorum accusantium alias amet provident iusto 
            voluptates beatae officia quo mollitia fugiat ex distinctio quas 
            cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
            Facere nesciunt porro molestiae rerum, aliquid praesentium. 
            Reiciendis ad nihil et animi enim, dicta, delectus, laudantium provident 
            fugiat repudiandae cupiditate. Quasi, sunt magnam! Sed odit explicabo 
            accusantium est velit accusamus culpa perspiciatis tenetur impedit cumque, 
            optio eaque aut! Quibusdam, molestias eaque iure blanditiis earum natus 
            exercitationem esse deserunt libero debitis quia, sunt culpa voluptas, 
            unde provident minima commodi optio veniam quasi fuga. Voluptas sunt excepturi id!
            fugiat repudiandae cupiditate. Quasi, sunt magnam! Sed odit explicabo 
            accusantium est velit accusamus culpa perspiciatis tenetur impedit cumque, 
            optio eaque aut! Quibusdam, molestias eaque iure blanditiis earum natus 
            exercitationem esse deserunt libero debitis quia, sunt culpa voluptas, 
            unde provident minima commodi optio veniam quasi fuga. Voluptas sunt excepturi id!
        </p>
        <p class="text-center text-gray-700">End of Blog</p>
        <p class="text-center text-gray-700">Thank you for taking the time to read this blog.</p>
        <p class="text-center pt-2 text-gray-700"><i class="pi pi-face-smile" style="font-size: 1.2rem"></i></p>

    </section>
    <NewsLetterSignUpComponent/>
</template>

<style scoped>

</style>