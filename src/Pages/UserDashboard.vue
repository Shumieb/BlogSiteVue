<script setup lang="ts">
    import BlogVComponent from '../components/BlogVComponent.vue';
    import UserInfoComponent from '../components/UserInfoComponent.vue';
    import NewsLetterSignUpComponent from '../components/NewsLetterSignUpComponent.vue';
    import { ref } from 'vue';

    const likedBlogs = ref([
        {
            Id: "2",
            title: "This is Blog number two",
            isFeatured: true,
            summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                    `,
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Eos, vel dolorum accusantium alias amet provident iusto 
                voluptates beatae officia quo mollitia fugiat ex distinctio quas 
                cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
                Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
            likes: 5,
            authorId: "2",
            categoryId: "2",
            statusId: "4",
            createdDate: new Date(2024, 12, 24)
        },
        {
            Id: "3",
            title: "This is Blog number three",
            isFeatured: true,
            summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                    `,
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Eos, vel dolorum accusantium alias amet provident iusto 
                voluptates beatae officia quo mollitia fugiat ex distinctio quas 
                cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
                Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
            likes: 5,
            authorId: "3",
            categoryId: "3",
            statusId: "4",
            createdDate: new Date(2024, 12, 24),
        },
        {
            Id: "5",
            title: "This is Blog number five",
            isFeatured: true,
            summary: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laudantium in magni dolorum, rerum voluptatem unde mollitia numquam 
                    `,
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Eos, vel dolorum accusantium alias amet provident iusto 
                voluptates beatae officia quo mollitia fugiat ex distinctio quas 
                cumque in tempora blanditiis, veritatis harum tempore perferendis iure. 
                Facere nesciunt porro molestiae rerum, aliquid praesentium. `,
            likes: 5,
            authorId: "4",
            categoryId: "4",
            statusId: "4",
            createdDate: new Date(2022, 8, 24),
        },
    ])
    
    const HandleBlogLoad = () =>{
        console.log("load more blogs")
    }

</script>

<template>
    <UserInfoComponent/>

    <section class="w-[80%] mx-auto px-3 py-4 mt-4">
        <p class="text-xl font-bold">Liked Blogs</p>
        <div>
            <ul>
                <li v-for="blog in likedBlogs" :key="blog.Id">
                    <BlogVComponent :blog="blog"/>
                </li>
            </ul>
        </div>
        <section class="mt-10 mb-3 text-center">
        <button 
            @click="HandleBlogLoad"
            class="bg-gray-950 text-white text-lg px-6 py-2 rounded border-2 border-gray-950 hover:bg-gray-800 cursor-pointer w-[25%]"
        >Load More</button>
    </section>
    </section>

    <NewsLetterSignUpComponent/>
</template>

<style scoped>

</style>