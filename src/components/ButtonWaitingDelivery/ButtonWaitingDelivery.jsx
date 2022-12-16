import { useState } from "react";
import ModalWaitingDelivery from "../../pages/gardens/Modal/ModalWaitingDelivery";

export default function ButtonWaitingDelivery({ props }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handleClosePayment = () => setShowPaymentModal(false);
  return (
    <div>
      <ModalWaitingDelivery
        onClose={handleClosePayment}
        visible={showPaymentModal}
      />

      <button
        onClick={() => setShowPaymentModal(true)}
        title="Xem chi tiết giao hàng"
        className="bg-orange-500  hover:bg-orange-600  text-white  px-2 py-1 rounded-full   w-32 text-center"
      >
        Đang giao hàng
      </button>
    </div>
  );
}
