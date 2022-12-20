import { useState } from "react";
import ModalPostProduct from "../../Modal/ModalPostProduct";

export default function CardProduct() {
  const [showPostProductModal, setShowPostProductModal] = useState(false);
  const handleClosePostProductModal = () => setShowPostProductModal(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <div className=" w-full mx-auto mt-2 test-width rounded-lg shadow-md">
      <ModalPostProduct
        onClose={handleClosePostProductModal}
        visible={showPostProductModal}
      />
      <div
        className="relative"
       
      >
        <button
        title="Xóa sản phẩm này"
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
          className={
            isHover
              ? "absolute z-20 bg-red-500 border-2 text-white border-red-500 -top-3 -right-3 rounded-full   h-9 w-9 flex justify-center items-center"
              : "absolute z-20 bg-white border-2 border-red-500 text-red-500 -top-3 -right-3 rounded-full  h-9 w-9 flex justify-center items-center"
          }
        >
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
        <img
          className=" h-48 w-full object-cover rounded-t-lg hover:brightness-90"
          alt=""
          src={require("../../../../assets/images/image/test-flower.jpg")}
        />
      </div>

      <div className="py-2 px-3">
        <p className=" text-center font-medium text-xl ml-1 mt-2 mb-2">
          Hoa Lan
        </p>
      </div>
      <div className="flex justify-start items-center w-full ">
        <button
          title="Bán sản phẩm này"
          onClick={() => setShowPostProductModal(true)}
          className=" w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3  rounded-b-lg flex justify-center shadow-md  items-center "
        >
          <p className="mb-0 text-base">Bán</p>
        </button>
      </div>
    </div>
  );
}
