import {User} from "../models/User.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : User[]=[]

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser(state, action: PayloadAction<User>){
            state.push(action.payload);
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;