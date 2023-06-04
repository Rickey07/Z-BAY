import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const getAllProducts = createAsyncThunk('product/getAllProducts',async(thunkApi) => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/product/all/products`)
    const data = await res.json()
    console.log(data);
    return data;
})

const productsSlice = createSlice({
    name:"products",
    initialState:{
        products:[]
    },
    reducers:{
        removeProduct:(state,{payload}) => {
            const copy = [...state.products].filter((product) => product._id !== payload);
            state.products = copy
        }
    },
    extraReducers:{
        [getAllProducts.fulfilled]:(state,{payload}) => {
            state.products = payload.products
        }
    }
})

export default getAllProducts

export const productActions = productsSlice.actions

export const productsReducer = productsSlice.reducer