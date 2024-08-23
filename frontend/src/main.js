import {createApp} from 'vue'
import {createPinia} from 'pinia'

import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', component: () => import('./components/home/Home.vue')},
    {path: '/game/:id', component: () => import('./components/game/Game.vue')},

    //     TODO: change the path to the correct components
    {path: '/explore', component: () => import('./components/404/NotFound.vue')},
    {path: '/calendar', component: () => import('./components/404/NotFound.vue')},
    {path: '/library', component: () => import('./components/404/NotFound.vue')},
    {path: '/community', component: () => import('./components/404/NotFound.vue')},
    {path: '/friends', component: () => import('./components/404/NotFound.vue')},

    {path: '/login', component: () => import('./components/404/NotFound.vue')},
    {path: '/register', component: () => import('./components/404/NotFound.vue')},
    {path: '/profile', component: () => import('./components/404/NotFound.vue')},

    {path: '/:pathMatch(.*)*', component: () => import('./components/404/NotFound.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount("#app");

history.scrollRestoration = 'manual';
