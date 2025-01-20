import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Equipment} from "../models/Equipment.ts";

const initialState: Equipment[] = [];

export const equipmentSlice = createSlice({
    name:'equipment',
    initialState,
    reducers:{
        addEquipment(state, action: PayloadAction<Equipment>){
            state.push(action.payload);
        },
        deleteEquipment(state, action: PayloadAction<Equipment>){
            // @ts-ignore
            return state.filter((equipment) => equipment.EquipmentId !== action.payload);
        }
}
})
export const {addEquipment,deleteEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;