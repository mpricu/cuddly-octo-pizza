import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../features/store/pages/Home';
import Menu from '../features/store/pages/Menu';
import AuthenticateUser from '../features/user-account/pages/AuthenticateUser';
import UserInfo from '../features/user-account/pages/UserInfo';
import UserPage from '../features/user-account/pages/UserPage';
import UserOrders from '../features/user-account/pages/UserOrders';

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
        component: Menu
    },
    {
        path: '/authenticate',
        name: 'Login',
        component: AuthenticateUser
    },
    {
        path: '/user/:id',
        component: UserPage,
        beforeEnter: (from, to, next) => {
            if (localStorage.getItem('user')) {
                next();
            } else
                next({
                    name: 'Login'
                });
        },
        children: [
            {
                path: 'profile',
                name: 'UserProfile',
                component: UserInfo
            },
            {
                path: 'orders',
                name: 'UserOrders',
                component: UserOrders
            }
        ]
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
