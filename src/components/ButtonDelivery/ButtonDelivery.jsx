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
      title="Giao hàng"
        onClick={() => setShowDeliveryModal(true)}
        className="bg-green-600 hover:bg-green-700 text-white text-sm  py-2 px-3 border border-green-700 rounded-lg w-28 shadow-md"
      >
        Giao hàng
      </button>
    </div>
  );
}
