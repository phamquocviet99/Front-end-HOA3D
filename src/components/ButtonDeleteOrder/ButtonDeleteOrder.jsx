import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import ModalDeleteOrder from "../../pages/gardens/Modal/ModalDeleteOrder";
import ModalDelivery from "../../pages/gardens/Modal/ModalDelivery";

export default function ButtonDeleteOrder() {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const handleClosePostProductModal = () => setShowDeliveryModal(false);
  return (
    <div>
      <ModalDeleteOrder
        onClose={handleClosePostProductModal}
        visible={showDeliveryModal}
      />

      <button
        onClick={() => setShowDeliveryModal(true)}
        className="p-2 bg-red-600 hover:bg-red-700 rounded-md mx-1"
      >
        <FaRegWindowClose className="text-white text-2xl" />
      </button>
    </div>
  );
}
