import { useState } from "react";
import ModalWaitingShopPayment from "../../pages/gardens/Modal/ModalWaitingShopPayment";
export default function ButtonWaitingShopPayment({ props }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handleClosePayment = () => setShowPaymentModal(false);
  return (
    <div>
      <ModalWaitingShopPayment onClose={handleClosePayment} visible={showPaymentModal} />

      <button
        title="Xem chi tiết trạng thái"
        onClick={() => setShowPaymentModal(true)}
        className="shadow-md bg-purple-500  hover:bg-purple-600 text-white px-2 py-1 rounded-full w-32 text-center"
      >
        Đã cọc
      </button>
    </div>
  );
}
