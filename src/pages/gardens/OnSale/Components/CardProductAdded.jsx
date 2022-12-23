import { useState } from "react";
import ModalDetailProductOnSale from "../../Modal/ModalDetailProductOnSale";

export default function CardProductAdded() {
  const [showDetailProductOnSaletModal, setShowDetailProductOnSaleModal] =
    useState(false);
  const handleCloseModal = () => setShowDetailProductOnSaleModal(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="w-full mx-auto mt-2 test-width rounded-lg shadow-md bg-white">
      <ModalDetailProductOnSale
        onClose={handleCloseModal}
        visible={showDetailProductOnSaletModal}
      />
      <div className="relative">
        <button
          title="Xóa sản phẩm này"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={
            isHover
              ? "absolute z-10 bg-red-500 border-2 text-white border-red-500 -top-3 -right-3 rounded-full   h-9 w-9 flex justify-center items-center"
              : "absolute z-10 bg-white border-2 border-red-500 text-red-500 -top-3 -right-3 rounded-full  h-9 w-9 flex justify-center items-center"
          }
        >
          <i class="fa-solid fa-xmark text-2xl "></i>
        </button>
      </div>
      <div onDoubleClick={() => setShowDetailProductOnSaleModal(true)}>
        <img
          className=" h-48 w-full object-cover rounded-t-lg"
          alt=""
          src={require("../../../../assets/images/image/test-flower.jpg")}
        />
        <div className="px-3 py-2">
          <p className="mt-2 text-xl font-light mb-0">Hoa cúc vàng</p>

          <p className="mt-2 text-base  mb-0">Danh mục : Hoa cúc</p>

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <p className="mb-0 text-base mr-1">Loại </p>
              <div className=" rounded-full bg-green-600  flex justify-center items-center p-2 h-6 w-6">
                <p className="mb-0 text-white text-xs">A</p>
              </div>
            </div>
            <p className=" text-base mb-0 ">220.000đ</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center mt-3">
          <button
            title="Bán lại sản phẩm này"
            className="shadow-md w-full bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-b-lg"
          >
            <div className="flex justify-center items-center ">
              <i class="fa-solid fa-rotate-right text-lg"></i>
              <p className="mb-0 ml-2 text-base">Bán lại</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
