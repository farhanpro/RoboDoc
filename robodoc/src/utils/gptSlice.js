import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"roleOfDoc",
    initialState:{
        doctorRole : null,
        showGPT : false
    },
    reducers:{
        toggleGPT:(state) =>{
            state.showGPT = !state.showGPT;
        },
        addDoc:(state,action) =>{
           state.doctorRole = action.payload
        },
        removeDoc:(state,action) =>{
            return null;
        },
    },
});

export const {addDoc,removeDoc,toggleGPT} = gptSlice.actions;
export default gptSlice.reducer;