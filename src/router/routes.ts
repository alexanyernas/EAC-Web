// Import VueRouter
import * as VueRouter from 'vue-router';

export const routes: VueRouter.RouteRecordRaw[] = [
    {
        path: '/',
        redirect: {
            name: 'Home'
        },
        component: () => import ('@/layouts/HomeLayout.vue'),
        children: [
            {
        
                path: '',
                name: 'Home',
                component: () => import('@/pages/Home/HomePage.vue'),
                
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/NotFound/NotFoundPage.vue'),
        meta: {
            global: true
        }
    }, 
];