import axios from "axios"
import { useQuery } from "react-query"
import { Select } from 'antd';
import { useSelector } from "react-redux";
import { setUsers } from "../redux-Toolkit/features/apiSlice";
const { Option } = Select;

const Selected = () => {
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

return(
  <div className="flex w-[90%] mb-10  justify-start items-center flex-row h-[400px]">
    <Select
    mode="tags"
    showSearch
    style={{
      width: "100%",
      flexDirection:"row"
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    {users.map((i,index)=>{return( 

        <Option 
    className=" m-2 font-bold" 
    key={index} id={i.id}>{i.name}</Option>

    )})}
  </Select>
  </div>
)
};

export default Selected;