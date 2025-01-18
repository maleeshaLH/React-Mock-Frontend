import {configureStore} from "@reduxjs/toolkit";
import {fieldSlice} from "../reducers/FieldSlice.tsx";
import {cropSlice} from "../reducers/CropSlice.tsx";
import {staffSlice} from "../reducers/StaffSlice.tsx";
import {logMonitoringSlice} from "../reducers/LogMonitoringSlice.tsx";
import {vehicleSlice} from "../reducers/VehicleSlice.tsx";
import {equipmentSlice} from "../reducers/EquipmentSlice.tsx";

export const store = configureStore({
    reducer: {
        field:fieldSlice.reducer,
        crop:cropSlice.reducer,
        staff:staffSlice.reducer,
        logMonitoring:logMonitoringSlice.reducer,
        vehicle:vehicleSlice.reducer,
        equipment:equipmentSlice.reducer,
    }
});

export default store ;