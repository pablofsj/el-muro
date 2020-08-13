import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

import Auth from '../components/Auth'; 
import Success from '../components/Success';
import NotFound from '../components/NotFound'; 

Vue.use(VueRouter);   

const router = new VueRouter({
    routes: [
        {
            path: '/auth', 
            component: Auth,
            name: "auth",
           
        },

        {
            path: '/', 
            component: Success,
            name: "success",
            meta:{
                requiresAuth: true
            }
        },

        {
            path: '*',
            component: NotFound,
            name: "notfound"

        }
    ]
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    if (to.meta.requiresAuth && currentUser == null) {
        next('/auth')
    } else {
        next()
    }
})

export default router;