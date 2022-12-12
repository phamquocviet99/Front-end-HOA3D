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
        className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 border border-blue-700 rounded-lg w-28"
      >
        Đặt cọc
      </button>
    </div>
  );
}
