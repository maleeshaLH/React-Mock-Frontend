import {Field} from "../models/Filed.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

 const initialState: Field[] = [];
export const fieldSlice = createSlice({
    name : 'field',
    initialState,
    reducers:{
        addField(state, action: PayloadAction<Field>){
            state.push(action.payload);
        },
        updateField(state, action: PayloadAction<Field>){
            return state.map(field =>
            field.fieldCode === action.payload.fieldCode ? action.payload : field);
        },
        deleteField(state, action: PayloadAction<Field>){
            // @ts-ignore
            return state.filter((field) => field.fieldCode !== action.payload);

        }
    }
})
export const {addField,updateField,deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;