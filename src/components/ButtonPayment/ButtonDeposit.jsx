import { useState } from "react";
import ModalPayment from "../../pages/gardens/Modal/ModalPaymen";

export default function ButtonDeposit() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handleClosePayment = () => setShowPaymentModal(false);
  return (
    <div>
      <ModalPayment onClose={handleClosePayment} visible={showPaymentModal} />

      <button
        title="Đặt cọc đơn hàng"
        onClick={() => setShowPaymentModal(true)}
        className="bg-gray-400 shadow-md hover:bg-gray-500 text-white px-2 py-1 rounded-full  w-32 text-center"
      >
        Mới
      </button>
    </div>
  );
}
