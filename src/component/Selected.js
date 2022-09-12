import {useEffect} from 'react';
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
    <Select
    mode="tags"
    showSearch
    style={{
      width: 700,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    {users.map((i,index)=>{return <Option key={index} id={i.id}>{i.name}</Option>})}
  </Select>
)
};

export default Selected;