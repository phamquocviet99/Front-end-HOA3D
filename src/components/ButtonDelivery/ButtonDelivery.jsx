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
        className="bg-sky-500  hover:bg-sky-600 text-white px-2 py-1 rounded-full   w-32 text-center shadow-md"
      >
        Giao hàng ngay
      </button>
    </div>
  );
}
