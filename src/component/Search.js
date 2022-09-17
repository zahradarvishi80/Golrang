import React, {  useState } from "react"
import { Input} from 'antd';
import axios from "axios"
import { useQuery } from "react-query"
import { useSelector } from "react-redux";
import { setUsers } from "../redux-Toolkit/features/apiSlice";
import Tabel from "./Tabel";
const Search=()=>{
    const [text, setText] = useState("")
    const users=useSelector(state=>state.api.users)

    async function fetchData(){
      const {users}=await axios.get('https://jsonplaceholder.typicode.com/users')
      return setUsers(users)
    }
   const {error,isError,isLoading}=useQuery('posts',fetchData)
    if(isLoading){
      return <div>Loading...</div>
    }
     if(isError){
      return <div>Error! {error.message}</div>
   }

    const keys=["name","username","email"]
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
    
      <div className="flex w-[90%] m-10 items-center flex-col md:h-[510px] h-[420px]">
        <Input 
        className="flex w-84 h-10 md:text-lg sm:h-[60px] rounded-full border-2 text-md hover:border-2 mb-5 hover:border-black"
        placeholder="Search..."
        onChange={(e)=>setText(e.target.value)}
        />
        <Tabel data={search(users)}/>
        </div>
    )
}
export default Search