// import "../index.css" 

const Tabel=({data})=>{
  

    return(
        <table className=" flex">
            <tbody className="flex lg:w-[850px] md:w-[700px] sm:w-[600px] xl:w-[1000px] flex-col justify-around " >
                <tr className="flex justify-center lg:justify-between sm:justify-between  xl:w-[1000px] " >
                    <th className="xl:text-xl text-start  xl:w-48 xl:h-8 flex mr-24">Name</th>
                    <th className="xl:text-xl text-start  xl:w-48 xl:h-8 flex mr-24">UserName</th>
                    <th className="xl:text-xl text-start sm:mr-32 xl:w-48 xl:h-8 flex lg:w-40 lg:mr-10">Email</th>
                </tr>
                {data.map(item=>(
                <tr key={item.id}  className="flex w-[420px] md:justify-between sm:w-[570px] sm:justify-between  xl:w-[1000px] justify-around  sm:m-2" >
                    <td  className="xl:text-lg text-start sm:w-40 w-32 h-5 md:w-40 xl:w-48 xl:h-8 flex">{item.name}</td>        
                    <td  className="xl:text-lg text-start  w-28 h-5 lg:w-40 lg:mr-10 md:w-24  xl:ml-20 md:ml-2 sm:mr-28 xl:w-48 xl:h-8 flex ml-10">{item.username}</td>  
                    <td  className="xl:text-lg text-start  w-36 h-5  lg:w-40 lg:-mr-60 md:w-44 xl:w-48 md:-mr-[135px]  xl:h-8  xl:mr-10 flex">{item.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Tabel