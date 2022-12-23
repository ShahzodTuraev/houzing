import React from "react";
import useId from "../hooks/useId";
const HomePage = React.lazy(()=>import('../pages/Home')) 
// import HomePage from '../pages/Home'
const Properties = React.lazy(()=>import('../pages/Properties')) 
// import Properties from '../pages/Properties'


export const navbar =[
    {
        id: useId, 
        element: (
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
                <HomePage /> 
            </React.Suspense>
            ),
        title: 'Home',
        path: '/home',
        private: false,
        hidden: false
    },
    {
        id: useId,
        element: (
        <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <Properties /> 
        </React.Suspense>
        ),
        title: 'Properties', 
        path: '/properties', 
        private: false, 
        hidden: false
    },
    {
        id: useId,
        element: <h1>Generic SIGN IN</h1>, 
        title: 'Sign In', 
        path: '/signin', 
        private: false, 
        hidden: true
    },
    {
        id: useId,
        element: <h1>Generic SIGN UP</h1>, 
        title: 'Sign Up', 
        path: '/signup', 
        private: false, 
        hidden: true
        },
];