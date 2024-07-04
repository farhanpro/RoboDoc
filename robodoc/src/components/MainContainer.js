import data from "../assests/data";
import { useDispatch,useSelector } from "react-redux";
import { addDoc, toggleGPT } from "../utils/gptSlice";


const MainContainer = () => {
    const dispatch = useDispatch();
    const activateGpt = (item) =>{
        dispatch(toggleGPT());
        dispatch(addDoc(item.doctorType))
    }

    return (
      <div className="absolute container mx-auto mt-36 flex flex-wrap justify-center gap-4 ">
        {data.map((item, index) => (
          <div key={index} className="card flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/6" 
          onClick={()=>{activateGpt(item)}}>
            <img src={item.imgUrl} alt={item.doctorType} className="h-32 w-32 object-cover rounded-full mb-4" />
            <h1 className="text-lg font-semibold text-center">{item.doctorType}</h1>
          </div>
        ))}
      </div>
    );
  };
  
  export default MainContainer;