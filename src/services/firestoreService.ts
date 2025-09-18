import { db } from '../services/config/firestoreConfig'
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

// fetch data
const getAllBlogsData = async () => {
    let blogs: any = [];
    try {
        const querySnapshot = await getDocs(collection(db, "Blogs"));
        querySnapshot.docs.forEach((doc) => {
            let blog = doc.data()
            blog.Id = doc.id
            blogs.push(blog)
        })
        return blogs
    } catch (error) {
        console.log("error fetching blogs data", error)
    }
}

const getBlogById = async (id: string) => {
    let blog: any;
    try {
        const docRef = doc(db, "Blogs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            blog = docSnap.data()
        } else {
            console.log("No such document!");
        }
        return blog
    } catch (error) {
        console.log("error fetching blog data", error)
    }
}

const getFeaturedBlogDate = async () => {
    let blogs: any = [];
    try {
        const q = query(collection(db, "Blogs"), where("isFeatured", "==", true));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let blog = doc.data()
            blog.Id = doc.id
            blogs.push(blog)
        });
        return blogs
    } catch (error) {
        console.log("error fetching featured blogs data", error)
    }
}

const getAllCategoryData = async () => {
    let categories: any = [];
    try {
        const querySnapshot = await getDocs(collection(db, "Category"));
        querySnapshot.forEach((doc) => {
            let category = doc.data()
            category.Id = doc.id
            categories.push(category)
        });
        return categories
    } catch (error) {
        console.log("error fetching category data", error)
    }
}

const getAllAuthorsData = async () => {
    let authors: any = [];
    try {
        const querySnapshot = await getDocs(collection(db, "Authors"));
        querySnapshot.forEach((doc) => {
            let author = doc.data()
            author.Id = doc.id
            authors.push(author)
        });
        return authors
    } catch (error) {
        console.log("error fetching author data", error)
    }
}

const getAllBlogStatusData = async () => {
    let status: any = [];
    try {
        const querySnapshot = await getDocs(collection(db, "BlogStatus"));
        querySnapshot.forEach((doc) => {
            let blogStatus = doc.data()
            blogStatus.Id = doc.id
            status.push(blogStatus)
        });
        return status
    } catch (error) {
        console.log("error fetching BlogStatus data", error)
    }
}


export {
    getAllCategoryData,
    getAllAuthorsData,
    getAllBlogsData,
    getAllBlogStatusData,
    getFeaturedBlogDate,
    getBlogById
}