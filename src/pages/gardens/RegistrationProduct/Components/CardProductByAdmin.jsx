import { useState } from "react";

export default function CardProductByAdmin() {
  const [isCheck, setIsCheck] = useState(true);

  return (
    <div className=" w-full mt-3 shadow-md rounded-lg">
      <img
        // className="h-48 w-full object-cover"
        className="img-responsive rounded-lg"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />
      <div className="mt-2">
        <p className="text-center font-bold text-base font-title-product mb-0">
          HOA NHÀI 3D
        </p>
      </div>
      <div className="flex items-center justify-center px-2">
        {isCheck ? (
          <button
            onClick={() => setIsCheck(!isCheck)}
            className=" rounded-full  h-10 w-10 flex justify-center items-center m-2 text-blue-500 border-blue-500 border-2 hover:border-transparent hover:text-white hover:bg-blue-500 focus:ring-0"
          >
            <i className="fa-solid fa-check text-xl"></i>
          </button>
        ) : (
          <button  onClick={() => setIsCheck(!isCheck)} className="text-red-500 rounded-full  h-10 w-10 flex justify-center items-center m-2 border-red-500 border-2 hover:border-transparent hover:text-white hover:bg-red-500 focus:ring-0">
            <i className="fa-solid fa-xmark text-2xl "></i>
          </button>
        )}
      </div>
    </div>
  );
}
