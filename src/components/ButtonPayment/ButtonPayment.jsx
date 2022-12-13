import { useState } from "react";
import ModalPayment from "../../pages/gardens/Modal/ModalPaymen";

export default function ButtonPayment() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handleClosePayment = () => setShowPaymentModal(false);
  return (
    <div>
      <ModalPayment onClose={handleClosePayment} visible={showPaymentModal} />

      <button
      title="Đặt cọc đơn hàng"
        onClick={() => setShowPaymentModal(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white  py-2 px-3 border border-orange-600 rounded-lg w-28 shadow-md"
      >
        Đặt cọc
      </button>
    </div>
  );
}
