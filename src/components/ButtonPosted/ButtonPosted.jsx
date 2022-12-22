import { useState } from "react";
import ModalPostProduct from "../../pages/gardens/Modal/ModalPostProduct";
import { GoDiffAdded } from "react-icons/go";

export default function ButtonPosted() {
  const [showPostProductModal, setShowPostProductModal] = useState(false);
  const handleClosePostProductModal = () => setShowPostProductModal(false);
  return (
    <div>
      <ModalPostProduct
        onClose={handleClosePostProductModal}
        visible={showPostProductModal}
      />
      <button
        title="Đăng bán sản phẩm"
        onClick={() => setShowPostProductModal(true)}
        className=" shadow-md ml-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-sm py-2 px-3  rounded-lg "
      >
        <div className="flex justify-center items-center">
          <p className="mb-0 text-base">Đăng bán</p>
        </div>
      </button>
    </div>
  );
}
