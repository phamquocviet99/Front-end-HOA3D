import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ModalDelivery from "../../pages/gardens/Modal/ModalDelivery";
import ModalDetailOrder from "../../pages/gardens/Modal/ModalDetailOrder";

export default function ButtonDetailOrder({ props }) {
  const navigate = useNavigate();
  const [showDetailOrderModal, setShowDetailOrderModal] = useState(false);
  const handleCloseDetailModal = () => setShowDetailOrderModal(false);
  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }
  return (
    <div>
      <ModalDetailOrder
        onClose={handleCloseDetailModal}
        visible={showDetailOrderModal}
      />

      <button
        title="Xem chi tiết đơn hàng"
        // onClick={() => setShowDetailOrderModal(true)}
        onClick={goToDetail}
        className=" mr-2 bg-blue-500 hover:bg-blue-600 text-white text-sm  py-2 px-3 border border-blue-700 rounded-lg shadow-md"
      >
        Xem
      </button>
    </div>
  );
}
