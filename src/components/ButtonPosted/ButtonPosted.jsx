import { useState } from "react";
import ModalPostProduct from "../../pages/gardens/Modal/ModalPostProduct";

export default function ButtonPosted({button}) {
  const [showPostProductModal, setShowPostProductModal] = useState(false);
  const handleClosePostProductModal = () => setShowPostProductModal(false);
  return (
    <div>
      <ModalPostProduct
        onClose={handleClosePostProductModal}
        visible={showPostProductModal}
      />
      <button
        onClick={() => setShowPostProductModal(true)}
        className="mb-1 ml-2 w-full bg-orange-400 hover:bg-orange-500 text-white font-sm py-2 px-3  rounded-lg "
      >
        {button.name}
      </button>
    </div>
  );
}
