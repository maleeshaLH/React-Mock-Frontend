import {configureStore} from "@reduxjs/toolkit";
import {fieldSlice} from "../reducers/FieldSlice.tsx";

export const store = configureStore({
    reducer: {
        field:fieldSlice.reducer
    }
});

export default store ;