import { useState } from "react";
import ModalPostProduct from "../../pages/gardens/Modal/ModalPostProduct";
import { GoDiffAdded } from "react-icons/go";

export default function ButtonPosted({ button }) {
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
        className="mb-1 shadow-md ml-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-sm py-2 px-3  rounded-lg "
      >
        <div className="flex justify-center items-center">
          <GoDiffAdded className="text-xl mr-3" />
          <p className="mb-0 text-base">{button.name}</p>
        </div>
      </button>
    </div>
  );
}
