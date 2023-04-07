import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const fetchAllCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (thunkAPI) => {
        const res = await fetch('http://localhost:5000/api/category/all');
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
            console.log(payload)
            state.categories = payload
        }
    }
})

export default fetchAllCategories;

export const categoryReducer = categoriesSlice.reducer