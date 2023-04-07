import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    "name":"global",
    initialState:{
        toastAlertState:{
            visible:false,
            message:"",
            messageType:""
        }
    },
    reducers:{
        toastAlertStateToggler:(state,{payload}) => {
            state.toastAlertState = payload
        }

    }
})

export const globalActions = globalSlice.actions

export const globalSliceReducer = globalSlice.reducer