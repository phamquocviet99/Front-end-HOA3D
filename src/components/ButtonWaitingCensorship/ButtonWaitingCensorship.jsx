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
        className="bg-amber-500 shadow-md hover:bg-amber-600 text-white px-2 py-1 rounded-full   w-32 text-center"
      >
        Chờ kiểm duyệt
      </button>
    </div>
  );
}
