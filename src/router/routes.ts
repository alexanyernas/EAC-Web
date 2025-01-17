// Import VueRouter
import * as VueRouter from 'vue-router';

export const routes: VueRouter.RouteRecordRaw[] = [
    {
        path: '/',
        redirect: {
            name: 'Home'
        },
        component: () => import ('@/layouts/MainLayout.vue'),
        children: [
            {
        
                path: '',
                name: 'Home',
                component: () => import('@/pages/Home/HomePage.vue'),
                
            },
            {
        
                path: 'select',
                name: 'SelectLession',
                component: () => import('@/pages/Lession/SelectLessionPage.vue'),
                
            },
            {
        
                path: 'lession',
                name: 'CurrentLession',
                component: () => import('@/pages/Lession/CurrentLessionPage.vue'),
                
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