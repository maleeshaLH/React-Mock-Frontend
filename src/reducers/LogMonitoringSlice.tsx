import {LogMonitoring} from "../models/LogMonitoring.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : LogMonitoring[] = [];
export const logMonitoringSlice = createSlice({
    name:'logmonitoring',
    initialState,
    reducers:{
        addLogMonitoring(state, action: PayloadAction<LogMonitoring>){
            state.push(action.payload);
        }
    }
})
export const {addLogMonitoring} =logMonitoringSlice.actions;
export default logMonitoringSlice.reducer;