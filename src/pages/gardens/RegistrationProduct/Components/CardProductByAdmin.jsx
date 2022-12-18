import { useState } from "react";
import "./index.css"

export default function CardProductByAdmin() {
  const [isCheck, setIsCheck] = useState(true);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="width-card shadow rounded-lg">
      <img
        className=" h-44 w-full object-cover rounded-t-lg"
        // className="img-responsive rounded-t-lg"
        alt=""
        src={require("../../../../assets/images/image/test-flower.jpg")}
      />
      <div className="p-1">
      <p className=" text-center font-medium text-xl ml-1 mt-2 mb-2">Hoa nhài</p>
        {isCheck ? (
          <button
            onClick={() => setIsCheck(!isCheck)}
            title="Bán lại sản phẩm này"
            className=" shadow-md mb-1 w-full bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center  py-2 px-3 rounded-lg "
          >
            <div className="h-6 w-6 flex justify-center items-center rounded-full ">
              <i className="fa-solid fa-plus text-lg" />
            </div>

            <p className="mb-0 ml-3 text-base">Thêm </p>
          </button>
        ) : (
          <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => setIsCheck(!isCheck)}
            className={
              isHover
                ? "shadow-md mb-1 w-full bg-red-400 hover:bg-red-400 text-white flex justify-center items-center  py-2 px-3 rounded-lg "
                : " shadow-md mb-1 w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center  py-2 px-3 rounded-lg "
            }
          >
            {isHover ? (
              <>
                <div className="h-6 w-6 flex justify-center items-center rounded-full">
                  <i class="fa-solid fa-xmark text-base" />
                </div>
                <p className="mb-0 text-base ml-4">Xóa</p>
              </>
            ) : (
              <>
                <div className="h-6 w-6 flex justify-center items-center rounded-full">
                  <i class="fa-solid fa-check text-lg" />
                </div>
                <p className="mb-0 ml-3 text-base">Đã thêm </p>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
