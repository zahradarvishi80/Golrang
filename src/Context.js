
import React,{createContext, useState} from "react";
export const MyUser=createContext()
export const ContextProvider=({children})=>{
    const[users,setUsers]=useState([])
    return(
        <MyUser.Provider value={[users,setUsers]} >
        {children}
        </MyUser.Provider>
    )
}