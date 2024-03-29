import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const fetchAllCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (thunkAPI) => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/category/all`);
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
            state.categories = payload.categories
            if(payload.categories.length) {
                state.selectedCategory = [payload.categories[0]?.category_name]
            }
        }
    }
})

export default fetchAllCategories;

export const categoryActions = categoriesSlice.actions

export const categoryReducer = categoriesSlice.reducer