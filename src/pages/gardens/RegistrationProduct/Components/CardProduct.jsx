import { useState } from "react";
import ModalPostProduct from "../../Modal/ModalPostProduct";
import { TbTrashX } from "react-icons/tb";

export default function CardProduct() {
  const [showPostProductModal, setShowPostProductModal] = useState(false);
  const handleClosePostProductModal = () => setShowPostProductModal(false);
  return (
    <div className="relative  border-2 w-full rounded-xl p-1">
      <button className="border rounded absolute right-2 text-white text-2xl top-2 hover:bg-orange-700 ">
        <TbTrashX className="m-1" />
      </button>
      <ModalPostProduct
        onClose={handleClosePostProductModal}
        visible={showPostProductModal}
      />
      <img
        className="w-full h-52 rounded object-cover "
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />

      <p className="text-green-800 text-center text-base ml-1 mt-3 mb-3">
        Hoa Lan PRF màu đỏ
      </p>
     
      <div className="flex justify-center items-center">
        <button
          onClick={() => setShowPostProductModal(true)}
          className="mb-1 ml-2 bg-blue-600 hover:bg-blue-700 text-white font-base py-1 px-3  rounded "
        >
          Đăng bán
        </button>

      </div>
    </div>
  );
}
