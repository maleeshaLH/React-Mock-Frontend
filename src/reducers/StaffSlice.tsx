import {Staff} from "../models/Staff.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState :Staff [] = [];
export const staffSlice = createSlice({
    name:'staff',
    initialState,
    reducers:{
        addStaff(state, action: PayloadAction<Staff>){
            state.push(action.payload);
        }
    }
})

export const {addStaff} = staffSlice.actions;
export default staffSlice.reducer;