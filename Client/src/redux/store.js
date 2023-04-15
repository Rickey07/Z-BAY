import { configureStore } from "@reduxjs/toolkit";
import {categoryReducer} from '../redux/CategoriesSlice';
import { productsReducer } from "./ProductsSlice";
import { globalSliceReducer } from "./global";
import { cartSliceReducer } from "./CartSlice";

export const store = configureStore({
    reducer:{
        category:categoryReducer,
        global:globalSliceReducer,
        product:productsReducer,
        cart:cartSliceReducer
    },
}) 