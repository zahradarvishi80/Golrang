import React, { useEffect, useState } from "react"
import { Input} from 'antd';
import { useDispatch,useSelector } from "react-redux";
import { setUsers } from "../redux-Toolkit/features/apiSlice";
const Search=()=>{
    const [text, setText] = useState("")
    const users=useSelector(state=>state.api.users)
    const dispatch=useDispatch()
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      console.log(data);
      // 
      dispatch(setUsers(data))
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
    
      <div className="flex w-[90%]  m-10 items-center flex-col md:h-[510px] h-[420px]">
        
        <Input 
        className="flex w-84 h-10 md:text-lg sm:h-[60px] rounded-full border-2 text-md hover:border-2 mb-5 hover:border-black"
        placeholder="Search..."
        onChange={(e)=>setText(e.target.value)}
        />
        
        {users.length > 0 && (
         <ul>
            {users.filter((val)=>{
              if(text===""){
                return val
              }else if (val.name.toLowerCase().includes(text.toLowerCase())){
                return val
              }
            })
            .map(user => (
              <div className="flex m-2 sm:m-3 md:m-4 ">
              <li className="flex text-[15px] font-bold md:text-[18px]" key={user.id}>{user.id}. {user.name}</li>
              </div>
            ))}
         </ul>
        )}
        </div>
    )
}
export default Search