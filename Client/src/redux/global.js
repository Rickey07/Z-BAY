import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    "name":"global",
    initialState:{
        toastAlertState:{
            visible:false,
            message:"",
            messageType:""
        },
        refereshUserDetails:false
    },
    reducers:{
        toastAlertStateToggler:(state,{payload}) => {
            state.toastAlertState = payload
        },
        refreshUser:(state,{payload}) => {
            state.refereshUserDetails = !state.refereshUserDetails
        }
    }
})

export const globalActions = globalSlice.actions

export const globalSliceReducer = globalSlice.reducer