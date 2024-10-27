import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop'))
    }
];

export default routers;
