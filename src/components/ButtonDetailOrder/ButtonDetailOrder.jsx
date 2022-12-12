import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import ModalDelivery from "../../pages/gardens/Modal/ModalDelivery";
import ModalDetailOrder from "../../pages/gardens/Modal/ModalDetailOrder";

export default function ButtonDetailOrder() {
  const [showDetailOrderModal, setShowDetailOrderModal] = useState(false);
  const handleCloseDetailModal = () => setShowDetailOrderModal(false);
  return (
    <div>
      <ModalDetailOrder
        onClose={handleCloseDetailModal}
        visible={showDetailOrderModal}
      />

      <button
        onClick={() => setShowDetailOrderModal(true)}
        className=" bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 border border-blue-700 rounded-lg w-28"
      >
        Chi tiết
      </button>
    </div>
  );
}
