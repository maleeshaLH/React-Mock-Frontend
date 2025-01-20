import {LogMonitoring} from "../models/LogMonitoring.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : LogMonitoring[] = [];
export const logMonitoringSlice = createSlice({
    name:'logmonitoring',
    initialState,
    reducers:{
        addLogMonitoring(state, action: PayloadAction<LogMonitoring>){
            state.push(action.payload);
        },
        deleteLogMonitoring(state, action: PayloadAction<LogMonitoring>){
            // @ts-ignore
            return state.filter((logMonitoring) => logMonitoring.LogCode !== action.payload);
        }
    }
})
export const {addLogMonitoring,deleteLogMonitoring} =logMonitoringSlice.actions;
export default logMonitoringSlice.reducer;