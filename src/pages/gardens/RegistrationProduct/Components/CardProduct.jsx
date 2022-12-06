import { useState } from "react";
import ModalPostProduct from "../../Modal/ModalPostProduct";

export default function CardProduct() {
  const [showPostProductModal, setShowPostProductModal] = useState(false);
  const handleClosePostProductModal = () => setShowPostProductModal(false);
  return (
    <div className="border-2 w-full rounded-xl p-3">
      <ModalPostProduct
        onClose={handleClosePostProductModal}
        visible={showPostProductModal}
      />
      <img
        className="w-full h-52 rounded-xl object-cover"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />

      <p className="text-zinc-500 text-lg text-center mt-3">
        Hoa Lan PRF màu đỏ
      </p>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setShowPostProductModal(true)}
          className=" ml-2 bg-blue-600 hover:bg-blue-700 text-white font-base py-2 px-3  rounded "
        >
          Đăng bán
        </button>
        <button className="ml-2 bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-3   border-blue-700 rounded ">
          Xóa
        </button>
      </div>
    </div>
  );
}
