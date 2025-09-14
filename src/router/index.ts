import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("../Pages/Home.vue")
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: () => import("../Pages/SignIn.vue")
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: () => import("../Pages/SignUp.vue")
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: () => import('../Pages/Blogs.vue')
        },
        {
            path: '/blogs/:id',
            name: 'blog',
            component: () => import('../Pages/Blog.vue')
        },
        {
            path: '/user-dashboard/:id',
            name: 'userDashboard',
            component: () => import('../Pages/UserDashboard.vue')
        },
        {
            path: '/author-dashboard/:id',
            name: 'authorDashboard',
            component: () => import('../Pages/AuthorDashboard.vue')
        }
    ]
})

export default router