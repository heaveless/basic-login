import { lazy } from 'react-router-guard'

export default [
    {
        path: '/auth',
        component: lazy(() => import('../layouts/blank')),
        routes: [
            {
                path: '/',
                component: lazy(() => import('../pages/login'))
            }
        ]
    },
    {
        path: '/',
        component: lazy(() => import('../layouts/theme')),
        routes: [
            {
                path: '/',
                component: lazy(() => import('../pages/home'))
            }
        ]
    }
]