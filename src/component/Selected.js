import {useEffect, useContext} from 'react';
import { Select } from 'antd';
import { MyUser } from '../Context';
const { Option } = Select;

const Selected = () => {
    const [users, setUsers] =useContext(MyUser)

    useEffect(() => {
      fetchData()
    }, [])


  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log("data",data);
    setUsers(data)
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