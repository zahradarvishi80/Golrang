
import Selected from "./component/Selected";  
import Search from "./component/Search";

  
const App = () => {
  return (
    <div className="flex flex-col  justify-around items-center w-[100%] h-full ">
      <Search/>
      <img src="https://uploads-ssl.webflow.com/61e60131d76cdc84804f0cc3/61e60131d76cdcc14d4f0cfe_Illustration.png" 
        alt="Worth"
        className="flex w-40 h-40 xl:h-96 xl:w-96 xl:hover:h-96 xl:hover:w-96 xl:mt-20  lg:w-64 lg:h-64 sm:w-44 sm:h-44 md:w-56 md:hover:w-60 md:hover:h-60 md:mb-5 md:h-56 -mt-8 sm:mt-0 mb-0 hover:w-44 hover:h-44 mt-10"
        />
      <Selected/>
    </div>

  )
}
export default App



