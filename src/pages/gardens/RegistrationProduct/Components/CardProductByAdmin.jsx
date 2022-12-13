import { useState } from "react";

export default function CardProductByAdmin() {
  const [isCheck, setIsCheck] = useState(true);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className=" w-full mt-3 shadow-md rounded-lg">
      <img
        // className="h-48 w-full object-cover"
        className="img-responsive rounded-lg"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />
      <div className="flex items-center justify-between p-2">
        <p className=" text-lg font-title-product mb-0">Hoa nhài</p>

        <div className="flex items-center justify-center">
          {isCheck ? (
            <button
            title="Đăng ký sản phẩm này"
              onClick={() => setIsCheck(!isCheck)}
              className=" rounded-full   h-8 w-8  flex justify-center items-center text-blue-500 border-blue-500 border-2 hover:border-transparent hover:text-white hover:bg-blue-500 focus:ring-0"
            >
              <i class="fa-solid fa-plus text-xl"></i>
            </button>
          ) : (
            <button
              onClick={() => setIsCheck(!isCheck)}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              title="Hủy đăng ký sản phẩm này"
              className={
                isHover
                  ? "rounded-full  h-8 w-8 flex justify-center items-center  text-red-500 border-red-500 border-2 hover:border-transparent hover:text-white hover:bg-red-500 focus:ring-0"
                  : "rounded-full   h-8 w-8  flex justify-center items-center  text-blue-500 border-blue-500 border-2 hover:border-transparent hover:text-white hover:bg-blue-500 focus:ring-0"
              }
            >
              {isHover ? (
                <i class="fa-solid fa-xmark text-2xl"></i>
              ) : (
                <i class="fa-solid fa-check text-2xl"></i>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
