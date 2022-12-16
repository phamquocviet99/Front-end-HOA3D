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
        className="bg-blue-500 shadow-md hover:bg-blue-600 text-white px-2 py-1 rounded-full  w-32 text-center"
      >
        Đơn hàng mới
      </button>
    </div>
  );
}
