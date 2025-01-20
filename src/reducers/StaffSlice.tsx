import {Staff} from "../models/Staff.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState :Staff [] = [];
export const staffSlice = createSlice({
    name:'staff',
    initialState,
    reducers:{
        addStaff(state, action: PayloadAction<Staff>){
            state.push(action.payload);
        },
        deleteStaff(state, action: PayloadAction<Staff>){
            // @ts-ignore
            return state.filter(staff => staff.Id !== action.payload);
        }

    }
})

export const {addStaff,deleteStaff} = staffSlice.actions;
export default staffSlice.reducer;