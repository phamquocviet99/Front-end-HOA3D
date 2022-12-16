import { useState } from "react";
import ModalAddCardShip from "../../pages/gardens/Modal/ModalAddCardShip";


export default function ButtonAddCardShip() {
  const [showAddShipModal, setShowAddShipModal] = useState(false);
  const handleCloseAddShipModal = () => setShowAddShipModal(false);
  return (
    <div>
      <ModalAddCardShip
        onClose={handleCloseAddShipModal}
        visible={showAddShipModal}
      />

      <button
      title="Thêm nhà xe mới"
        onClick={() => setShowAddShipModal(true)}
        className="bg-blue-500  hover:bg-blue-500 text-white  py-2 px-3 border border-blue-500 rounded-lg w-28 shadow-md"
      >
        Thêm
      </button>
    </div>
  );
}
