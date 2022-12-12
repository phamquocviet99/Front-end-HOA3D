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
        className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md mx-1"
      >
        <AiFillEye className="text-white text-2xl" />
      </button>
    </div>
  );
}
