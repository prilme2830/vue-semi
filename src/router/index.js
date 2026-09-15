import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import RegistrationForm from '../views/RegistrationForm.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
     {
        path: '/about',
        name:  'about',
        component: About
    },
     {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/registration',
        name: 'registrationForm',
        component: RegistrationForm
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router