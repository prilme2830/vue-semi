import { createRouter, createWebHistory } from "vue-router";

import Ecommerce from "../views/Ecommerce.vue";
import Product from "../views/Product.vue";
import Orders from "../views/Basket.vue";
import Basket from "../views/Orders.vue";

const routes = [
    {

    path: '/',
    name: 'Ecommerce',
    component: Ecommerce
    },

    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
     {
        path: '/basket',
        name: 'Basket',
        component: Basket
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router