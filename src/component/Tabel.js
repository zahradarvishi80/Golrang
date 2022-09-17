

const Tabel=({data})=>{
  

    return(
        <table>
            <tbody>
                <tr>
                   
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
                {data.map(item=>(
                <tr key={item.id}>
                  
                    <td>{item.name}</td>        
                    <td>{item.username}</td>  
                    <td>{item.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Tabel