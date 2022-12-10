import { AiOutlineClose } from "react-icons/ai";
import { TbTrashX } from "react-icons/tb";

export default function CardOutOfStockProduct(){
    return (
        <div className="w-full p-2 shadow rounded-lg">
          <img
            // className="h-44 w-full "
            className="h-32 w-full object-cover rounded-md "
            alt=""
            src={require("../../../../assets/images/image/hoasen.jpg")}
          />
    
          <p className="mt-2 text-xl font-bold mb-0">Hoa sen</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <p className="mb-0 text-sm md:text-base mr-1">Loại :</p>
              <div className=" rounded-full bg-green-600  flex justify-center items-center p-2 h-6 w-6">
                <p className="mb-0 text-white text-xs">A</p>
              </div>
            </div>
            <div className="ml-4 flex items-center">
              <p className="mb-0 text-sm md:text-base mr-1">Màu :</p>
              <div className=" rounded-full bg-pink-600  flex justify-center items-center p-2 h-6 w-6"></div>
            </div>
          </div>
    
          <div className="w-full flex justify-start items-center mt-3">
            <button className="mb-1 w-full bg-blue-500 hover:bg-blue-600 text-white font-sm py-1 px-3  rounded-lg ">
              Bán lại
            </button>
            <button className="mb-1 ml-2 bg-red-500 hover:bg-red-600 text-white font-sm p-2  rounded-lg ">
            <AiOutlineClose  />
            </button>
          </div>
        </div>
      );
}