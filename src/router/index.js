import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../features/store/pages/Home';
import ShoppingCart from '../features/shopping-cart/pages/ShoppingCart';

import AuthenticateUser from '../features/user-account/pages/AuthenticateUser';
import UserRouter from '../features/user-account/router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pizza-menu',
        name: 'Menu',
        component: () =>
            import(
                /* webpackChunkName: "menu" */ '../features/store/pages/Menu'
            )
    },
    {
        path: '/cart',
        name: 'Cart',
        component: ShoppingCart
    },
    {
        path: '/authenticate',
        name: 'Login',
        component: AuthenticateUser
    },
    {
        path: '/user/:id',
        ...UserRouter
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
