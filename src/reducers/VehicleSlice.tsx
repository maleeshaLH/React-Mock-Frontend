import {Vehicle} from "../models/Vehicle.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState :Vehicle[] = [];
export const vehicleSlice = createSlice({
    name:'vehicle',
    initialState,
    reducers:{
        addVehicle(state, action: PayloadAction<Vehicle>){
            state.push(action.payload);
        },
        deleteVehicle(state, action: PayloadAction<Vehicle>){
            // @ts-ignore
            return state.filter((vehicle) => vehicle.VehicleCode !== action.payload);
        }
    }
})
export const {addVehicle,deleteVehicle} =  vehicleSlice.actions;
export default vehicleSlice.reducer;