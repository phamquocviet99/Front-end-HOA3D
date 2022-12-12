import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ModalDelivery from "../../pages/gardens/Modal/ModalDelivery";
import ModalDetailOrder from "../../pages/gardens/Modal/ModalDetailOrder";
import ModalEditOrder from "../../pages/gardens/Modal/ModalEditOrder";

export default function ButtonEditOrder() {
  const [showEditOrderModal, setShowEditOrderModal] = useState(false);
  const handleCloseEditlModal = () => setShowEditOrderModal(false);
  return (
    <div>
      <ModalEditOrder
        onClose={handleCloseEditlModal}
        visible={showEditOrderModal}
      />

      <button
        onClick={() => setShowEditOrderModal(true)}
        className="p-2 bg-green-600 hover:bg-green-700 rounded-md m-1"
      >
        <FiEdit className="text-white text-2xl" />
      </button>
    </div>
  );
}
