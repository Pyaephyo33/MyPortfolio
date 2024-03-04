import { createRouter,createWebHistory } from "vue-router";

const Home = () => import('../pages/Home.vue');
const About = () => import('../pages/About.vue');
const Contact  = () => import('../pages/Contact.vue');
const Experience = () => import('../Pages/Experience.vue');

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
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/experience',
        name: 'experience',
        component: Experience,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
})

