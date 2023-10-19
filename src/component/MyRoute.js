import {useRoutes} from "react-router-dom";
import ProductList from "./ProductList";
import NoMatchRoute from "./NoMatchRoute";
import ProductUpdate from "./ProductUpdate";
import ProductAdd from "./ProductAdd";

export default function MyRoute(){
    return useRoutes([
        {path:'*', element: <NoMatchRoute/>},
        {path:'/', element: <ProductList/>},
        {path:'/products', element: <ProductList/>},
        {path:'/products/:id', element: <ProductUpdate/>},
        {path:'/products/add', element: <ProductAdd/>},
    ]);
}