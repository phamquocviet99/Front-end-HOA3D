import { useState } from "react";
import ModalWaitingCensorship from "../../pages/gardens/Modal/ModalWaitingCensorship";



export default function ButtonWaitingCensorship() {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const handleClosePostProductModal = () => setShowDeliveryModal(false);
  return (
    <div>
      <ModalWaitingCensorship
        onClose={handleClosePostProductModal}
        visible={showDeliveryModal}
      />

      <button
      title="Xem chi tiết"
        onClick={() => setShowDeliveryModal(true)}
        className="bg-teal-500 shadow-md hover:bg-teal-600 text-white px-2 py-1 rounded-full   w-32 text-center"
      >
        Đã giao
      </button>
    </div>
  );
}
