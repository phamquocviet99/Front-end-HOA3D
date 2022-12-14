import { useState } from "react";

export default function CardProductByAdmin() {
  const [isCheck, setIsCheck] = useState(true);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className=" w-full mt-3 shadow-md rounded-lg">
      <img
        // className="h-48 w-full object-cover"
        className="img-responsive rounded-t-lg"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />
      <div className="  p-2">
        <p className="text-center text-lg font-title-product mb-2">Hoa nhài</p>
        {isCheck ? (
          <button
          onClick={() => setIsCheck(!isCheck)}
            title="Bán lại sản phẩm này"
            className="mb-1 w-full bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center  py-2 px-3 rounded-lg "
          >
            <div className="h-7 w-7 flex justify-center items-center rounded-full border-2 border-white">
              <i className="fa-solid fa-plus text-xl" />
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
                ? "mb-1 w-full bg-red-400 hover:bg-red-400 text-white flex justify-center items-center  py-2 px-3 rounded-lg "
                : "mb-1 w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center  py-2 px-3 rounded-lg "
            }
          >
            {isHover ? (
              <>
                <div className="h-7 w-7 flex justify-center items-center rounded-full border-2 border-white">
                  <i class="fa-solid fa-xmark text-xl" />
                </div>
                <p className="mb-0 text-base ml-4">Xóa</p>
              </>
            ) : (
              <>
                <div className="h-7 w-7 flex justify-center items-center rounded-full border-2 border-white">
                  <i class="fa-solid fa-check text-xl" />
                </div>
                <p className="mb-0 ml-1 text-base">Đã thêm </p>
              </>
            )}
          </button>
        )}

        {/* <div className="flex items-center justify-center">
          {isCheck ? (
            <button
              title="Đăng ký sản phẩm này"
              onClick={() => setIsCheck(!isCheck)}
              className=" rounded-full   h-8 w-8  flex justify-center items-center text-blue-500 border-blue-500 border-2 hover:border-transparent hover:text-white hover:bg-blue-500 focus:ring-0"
            >
              <i class="fa-solid fa-plus text-xl" />
              
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
                <i class="fa-solid fa-xmark text-2xl" />
              ) : (
                <i class="fa-solid fa-check text-2xl" />
              )}
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
}
