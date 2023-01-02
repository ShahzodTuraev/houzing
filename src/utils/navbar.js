import React from "react";
import useId from "../hooks/useId";
import Signin from "../pages/Register";
import Favourite from "../pages/Favourite";
import MyProfile from "../pages/MyProfile";
const HomePage = React.lazy(()=>import('../pages/Home')); 
// import HomePage from '../pages/Home'
const Properties = React.lazy(()=>import('../pages/Properties')); 
const HouseItem = React.lazy(()=>import('../pages/HouseItem')); 
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
                <HouseItem /> 
            </React.Suspense>
            ),
        title: 'Single House',
        path: '/properties/:id',
        private: false,
        hidden: true,
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
        element: <Signin/>, 
        title: 'Sign In', 
        path: '/signin', 
        private: false, 
        hidden: true
    },
    {
        id: useId,
        element: <Favourite/>, 
        title: 'Favourite', 
        path: '/favourite', 
        private: true, 
        hidden: true
    },
    {
        id: useId,
        element: <MyProfile/>, 
        title: 'My Profile', 
        path: '/myprofile', 
        private: true, 
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