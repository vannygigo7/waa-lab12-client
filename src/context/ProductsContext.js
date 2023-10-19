import {createContext} from "react";

export const ProductsContext = createContext([
    {id: 1, title: "P1", price: 10, quantity: 100},
    {id: 2, title: "P2", price: 20, quantity: 200},
    {id: 3, title: "P3", price: 30, quantity: 300},
]);