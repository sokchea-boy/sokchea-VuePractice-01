import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/Homepage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ContacePage from '@/pages/ContacePage.vue';


const routes = [
    {
        path : '/',
        name : 'Home',
        component: HomePage
    },
    {
        path : '/about',
        name : 'About',
        component: AboutPage
    },
    {
        path :'/contace',
        name : 'Contace',
        component: ContacePage
    }
]

const router = createRouter({
        'history':createWebHistory (),
        routes
})
export default router;