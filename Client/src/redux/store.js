import { configureStore } from "@reduxjs/toolkit";
import {categoryReducer} from '../redux/CategoriesSlice';

export const store = configureStore({
    reducer:{
        category:categoryReducer
    },
}) 