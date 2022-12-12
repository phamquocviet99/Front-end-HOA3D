import { useState } from "react";
import ModalDelivery from "../../pages/gardens/Modal/ModalDelivery";

export default function ButtonDelivery() {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const handleClosePostProductModal = () => setShowDeliveryModal(false);
  return (
    <div>
      <ModalDelivery
        onClose={handleClosePostProductModal}
        visible={showDeliveryModal}
      />

      <button
        onClick={() => setShowDeliveryModal(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 border border-blue-700 rounded-lg w-28"
      >
        Giao hàng
      </button>
    </div>
  );
}
