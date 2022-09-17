import React, { useEffect, useState } from "react"
import { Input} from 'antd';
import { useDispatch,useSelector } from "react-redux";
import { setUsers } from "../redux-Toolkit/features/apiSlice";
import Tabel from "./Tabel";
const Search=()=>{
    const [text, setText] = useState("")
    const users=useSelector(state=>state.api.users)
    const dispatch=useDispatch()
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      console.log(data);
      dispatch(setUsers(data))
    }
  
    useEffect(() => {
      fetchData()
    }, [])
    const keys=["name","username","email"]
    // console.log(users[0]["email"]);
    const search=(data)=>{
    return data.filter(item=>
      //When searching for a word,name ,username and email present in all of them
      //if u want use this feature take out comment

      //  item.name.toLowerCase().includes(text) &&
      //  item.username.toLowerCase().includes(text) &&
      //  item.email.toLowerCase().includes(text)


      //when searching for a word, existing in one of them name,username or email
      keys.some((key)=>item[key].toLowerCase().includes(text))
    )
    }
    return (
    
      <div className="flex w-[90%]  m-10 items-center flex-col md:h-[510px] h-[420px]">
        
        <Input 
        className="flex w-84 h-10 md:text-lg sm:h-[60px] rounded-full border-2 text-md hover:border-2 mb-5 hover:border-black"
        placeholder="Search..."
        onChange={(e)=>setText(e.target.value)}
        />
        <Tabel data={search(users)}/>
        {/* {users.length > 0 && (
         <ul >
            {users.filter((user)=>
            user.name.toLowerCase().includes(text)
            )
            
            filter((val)=>{
              if(text===""){
                return val
              }else if (val.name.toLowerCase().includes(text.toLowerCase())){
                return val
              }
            })
            .map(user => (
              <div className="flex m-2 sm:m-3 md:m-4 justify-around items-around">
              <li className="flex text-[15px] font-bold md:text-[18px]" key={user.id}>{user.id}. {user.name}</li>
        
              </div>
            ))}
         </ul>
        )} */}

        
        </div>
    )
}
export default Search