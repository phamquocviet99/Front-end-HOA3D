import { useState } from "react";
import ModalAddCard from "../ModalAddCard";
import CardPayment from "./CardPayment";

export default function ListCardPaymentComponent() {
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const handleCloseAddCardModal = () => setShowAddCardModal(false);
  return (
    <div className="h-screen shadow-md rounded-lg bg-white">
      <ModalAddCard
        onClose={handleCloseAddCardModal}
        visible={showAddCardModal}
      />

      <div className="py-3 px-4 flex justify-between items-center">
        <p style={{ fontSize: "20px" }} className="font-bold mb-0 mr-3">
          Danh sách chành xe
        </p>
        <button
          onClick={() => {
            setShowAddCardModal(true);
          }}
          className="bg-blue-500 hover:bg-blue-500 text-white  py-2 px-3 border border-blue-500 rounded-lg w-28 shadow-md"
        >
          Thêm
        </button>
      </div>
      <div className="line-y " />
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-3">
        <CardPayment />
        <CardPayment />
      </div>
    </div>
  );
}
