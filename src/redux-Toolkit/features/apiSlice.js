import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    users: [],
  
}
export const apiSlice=createSlice({

    name:'api',
    initialState,
    reducers:{
     setUsers:(state,action)=>{
         state.users = action.payload
        
     },
    
    }
})
export const { setUsers } =apiSlice.actions
export default apiSlice.reducer