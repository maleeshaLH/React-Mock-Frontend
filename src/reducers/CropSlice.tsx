import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Crop} from "../models/Crop.ts";

const initialState: Crop[] = [];
export const cropSlice = createSlice({
    name : 'crop',
    initialState,
    reducers:{
        addCrop(state, action: PayloadAction<Crop>){
            state.push(action.payload);
        },
        deleteCrop(state, action: PayloadAction<Crop>){
            // @ts-ignore
            return state.filter((crop) => crop.CropCode !== action.payload);
        }
    }
})
export const {addCrop,deleteCrop} = cropSlice.actions;
export default cropSlice.reducer;