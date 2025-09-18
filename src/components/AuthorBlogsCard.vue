<script setup lang="ts">
    import { onBeforeMount, ref } from 'vue';
    import { getFormattedDate } from '../utils/HelperFunctions';

    //props
    const props = defineProps(["blog"])

    // variables
    const blogRoute = ref("")
    const editBlogRoute = ref("")

    const createdDate = ref()
    const submittedDate = ref()
    const approvedDate = ref()
    const publishedDate = ref()
    const withdrawalDate = ref()
    
    const submitted=ref(false)
    const approved=ref(false)
    const published=ref(false)
    const withdrawn=ref(false)

    onBeforeMount(()=>{
        // set routes
        blogRoute.value = `/blogs/${props.blog.Id}`
        editBlogRoute.value = `/edit-blog/${props.blog.Id}`
        // set dates
        createdDate.value = getFormattedDate(props.blog.createdDate.toDate())
        
        if(props.blog.Status.name == "published"){
            setStatusBools(true, true, true, false)          
            submittedDate.value = getFormattedDate(props.blog.createdDate.toDate())
            approvedDate.value = getFormattedDate(props.blog.createdDate.toDate())
            publishedDate.value = getFormattedDate(props.blog.createdDate.toDate())
        }else if(props.blog.Status.name == "submitted"){
            setStatusBools(true, false, false, false)
            submittedDate.value = getFormattedDate(props.blog.createdDate.toDate())
        }else if(props.blog.Status.name == "approved"){
            setStatusBools(true, true, false, false)
            submittedDate.value = getFormattedDate(props.blog.createdDate.toDate())
            approvedDate.value = getFormattedDate(props.blog.createdDate.toDate())
        }else if(props.blog.Status.name == "withdrawn"){
            setStatusBools(false, false, false, true)
            withdrawalDate.value = getFormattedDate(props.blog.withdrawalDate.toDate())
        }       
    })

    const setStatusBools = (subVal:boolean, apprVal:boolean, pubVal:boolean, withVal:boolean) =>{
        submitted.value = subVal
        approved.value = apprVal
        published.value = pubVal
        withdrawn.value = withVal
    }  

</script>

<template>
    <section class="border-1 border-gray-200 rounded-md shadow-lg mb-8">
        <div class="items-center pb-3 pt-6 px-4">
            <div class="text-center">
                <router-link :to="blogRoute"  
                    class="text-2xl my-3 capitalize hover:underline decoration-violet-900">
                    {{props.blog.title}}
                </router-link>
            </div>
            
            <div class="text-xl capitalize pt-1.5 flex items-center gap-4 justify-center">
                <p><b>Category:</b> {{props.blog.Category.name}}</p>
                <p><b>Status:</b> {{props.blog.Status.name}}</p>
                <p><b>Likes:</b> {{ props.blog.likes }}</p>
                <p><b>Views:</b> {{ props.blog.views }}</p>
                <p><b>Is Featured:</b> {{ props.blog.isFeatured }}</p>
            </div>           
            <div class="py-3 px-6">
                <p class="font-bold text-xl">Summary: </p>
                <p class="text-lg">{{props.blog.summary}}</p>
           </div>               
           <div class="py-2 flex items-center justify-center gap-4 text-lg text-gray-400 text-wrap">
                <p><b>Created:</b> {{createdDate}}</p>
                <p v-if="withdrawn">></p>
                <p v-if="withdrawn"><b>Withdrawn:</b> {{withdrawalDate}}</p>
                <p v-if="submitted">></p>
                <p v-if="submitted"><b>Submitted:</b> {{submittedDate}}</p>
                <p v-if="approved">></p>
                <p v-if="approved"><b>Approved:</b> {{approvedDate}}</p>
                <p v-if="published">></p>
                <p v-if="published"><b>Published:</b> {{publishedDate}}</p>
            </div>  
            <div class="flex justify-end items-center gap-5 py-0 my-0 text-lg">
                <router-link 
                    :to="editBlogRoute"                             
                    class="bg-violet-900 text-white py-2 px-4 my-2 rounded-sm w-[180px] text-center"
                >Edit</router-link>
                <router-link 
                    v-if="(!published && !approved && !submitted) || withdrawn"
                    :to="editBlogRoute"                             
                    class="bg-green-900 text-white py-2 px-4 my-2 rounded-sm w-[180px] text-center"
                >Submit</router-link>
                <router-link 
                    v-if="(published || approved || submitted) && !withdrawn"
                    :to="editBlogRoute"                      
                    class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm w-[180px] text-center"
                >Request Withdrawal</router-link> 
                    <router-link 
                    v-if="(!published && !approved && !submitted) || withdrawn"
                    :to="editBlogRoute"                      
                    class="bg-red-800 text-white py-2 px-2 my-2 rounded-sm w-[180px] text-center"
                >Delete</router-link> 
            </div>         
        </div>             
    </section>
</template>


<style lang="css" scoped></style>