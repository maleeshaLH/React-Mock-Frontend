import {Field} from "../models/Filed.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

 const initialState: Field[] = [];
export const fieldSlice = createSlice({
    name : 'field',
    initialState,
    reducers:{
        addField(state, action: PayloadAction<Field>){
            state.push(action.payload);
        }
    }
})
export const {addField} = fieldSlice.actions;
export default fieldSlice.reducer;