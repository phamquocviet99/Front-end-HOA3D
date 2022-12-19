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
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <button
          className={
            isHover
              ? "absolute z-20 bg-red-600 top-2 right-2 rounded-md border-2 border-white h-10 w-10 flex justify-center items-center"
              : "absolute z-20  top-2 right-2 rounded-md border-2 border-white h-10 w-10 flex justify-center items-center"
          }
        >
          <i class="fa-solid fa-xmark text-2xl text-white"></i>
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

        <div className="flex justify-start items-center w-full ">
          <button
            title="Bán sản phẩm này"
            onClick={() => setShowPostProductModal(true)}
            className="mb-2 ml-1 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3  rounded-lg flex justify-center shadow-md  items-center "
          >
            <p className="mb-0 text-base">Bán</p>
          </button>
        </div>
      </div>
    </div>
  );
}
