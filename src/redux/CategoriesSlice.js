import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const fetchAllCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (thunkAPI) => {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json();
        console.log(data);
        return data;
    }
    
)

const categoriesSlice = createSlice({
    name:"categories",
    initialState:{
        categories:[]
    },
    reducers:{},
    extraReducers:{
        [fetchAllCategories.fulfilled]:(state,{payload}) => {
            state.categories = payload
        }
    }
})

export default fetchAllCategories;

export const categoryReducer = categoriesSlice.reducer