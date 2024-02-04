import { createRouter,createWebHistory } from "vue-router";

const Home = () => import('../pages/Home.vue');
const About = () => import('../pages/About.vue');


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
})

