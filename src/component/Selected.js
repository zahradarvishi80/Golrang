import {Fragment, useEffect} from 'react';
import { Select } from 'antd';
import { useDispatch,useSelector } from "react-redux";
import { setUsers } from "../redux-Toolkit/features/apiSlice";
const { Option } = Select;

const Selected = () => {
  const users=useSelector(state=>state.api.users)
  const dispatch=useDispatch()

    useEffect(() => {
      fetchData()
    }, [])

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log("data",data);
    dispatch(setUsers(data))
  }

return(
  <div className="flex w-[90%] mb-10  justify-start items-center flex-row h-[400px]">
    <Select
    mode="tags"
    showSearch
    // className='grid grid-cols-3 flex-row '
    style={{
      width: "100%",
      flexDirection:"row"
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    // val.name.toLowerCase().includes(text.toLowerCase())
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