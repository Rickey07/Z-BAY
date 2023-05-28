import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const fetchAllCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (thunkAPI) => {
        const res = await fetch('http://localhost:5000/api/category/all');
        const data = await res.json();
        return data;
    }
    
)

const categoriesSlice = createSlice({
    name:"categories",
    initialState:{
        categories:[],
        selectedCategory:[]
    },
    reducers:{
        setSelectedCategory:(state,{payload}) => {
            state.selectedCategory = payload
        }
    },
    extraReducers:{
        [fetchAllCategories.fulfilled]:(state,{payload}) => {
            console.log(payload)
            state.categories = payload.categories
        }
    }
})

export default fetchAllCategories;

export const categoryActions = categoriesSlice.actions

export const categoryReducer = categoriesSlice.reducer