
const Tabel=({data})=>{
  

    return(
        <table className=" flex">
            <tbody className="flex h-[400px] sm:w-[600px] md:w-[700px] lg:w-[850px] xl:w-[1000px] flex-col justify-around" >
                <tr className="flex sm:justify-between lg:justify-between xl:w-[1000px] justify-between" >
                    <th className="xl:text-xl text-start xl:mt-20 xl:w-48 xl:h-8 flex ">Name</th>
                    <th className="xl:text-xl text-start xl:mt-20 xl:w-48 xl:h-8 flex ml-10">UserName</th>
                    <th className="xl:text-xl text-start xl:mt-20 xl:w-48 xl:h-8 flex lg:w-40 lg:mr-10 sm:mr-32 mr-24 flex ">Email</th>
                </tr>
                {data.map(item=>(
                <tr key={item.id}  className="flex w-[420px] sm:w-[570px] xl:w-[1000px] md:justify-between sm:justify-between justify-around sm:m-2" >
                    <td  className="xl:text-lg text-start  w-32 h-5 md:w-40 xl:w-48 xl:h-8 flex sm:w-40">{item.name}</td>        
                    <td  className="xl:text-lg text-start  w-28 h-5 md:w-24 xl:w-48 xl:h-8 lg:w-40 lg:mr-10  xl:ml-20  md:ml-2 sm:mr-28 flex ml-10">{item.username}</td>  
                    <td  className="xl:text-lg text-start  w-36 h-5 md:w-44 xl:w-48 xl:h-8 lg:w-40 lg:-mr-60 xl:mr-10  md:-mr-[135px]  flex">{item.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Tabel