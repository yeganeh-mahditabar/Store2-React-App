import { lazy } from "react";

const Products = lazy(() => import('./Components/Products/Products'));
const Comments = lazy(() => import('./Components/Comments/Comments'));
const Users = lazy(() => import('./Components/Users/Users'));
const Orders = lazy(() => import('./Components/Orders/Orders'));
const Offs = lazy(() => import('./Components/Offs/Offs'));


export default [
    { path: "/products", element: <Products />},
    { path: "/comments", element: <Comments />},
    { path: "/users", element: <Users />},
    { path: "/orders", element: <Orders />},
    { path: "/offs", element: <Offs />},
];