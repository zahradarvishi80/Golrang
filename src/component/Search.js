import React, { useEffect, useState,useContext } from "react"
import { Input} from 'antd';
import { MyUser } from '../Context';

const Search=()=>{
    const [users, setUsers] =useContext(MyUser)
    const [text, setText] = useState("")
  
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      console.log(data);
      setUsers(data)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
    
      <div>
        
        <Input 
        style={{width:700}}
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
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
        </div>
    )
}
export default Search