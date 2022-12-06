import { useState } from "react";
import ModalAddCard from "../ModalAddCard";

export default function CardPaymentComponent() {
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const handleCloseAddCardModal = () => setShowAddCardModal(false);
  return (
    <div className="card-edit-user mt-4 p-4">
      <ModalAddCard
        onClose={handleCloseAddCardModal}
        visible={showAddCardModal}
      />
      <div className="flex justify-between items-center">
        <h4 className="text-zinc-500 text-xl my-3 ml-2 font-medium">
          Phương thức thanh toán
        </h4>
        <button
          onClick={() => {
            setShowAddCardModal(true);
          }}
          class=" mt-3 mb-2 bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded "
        >
          Thêm
        </button>
      </div>
      <div className="border w-full p-3 rounded mt-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="w-auto mx-auto object-cover object-center"
              src={require("../../../../assets/images/logo/card_icon.png")}
              alt="Avatar Upload"
            />
          </div>
          <div>
            <button className=" ml-2 bg-orange-100 hover:bg-orange-200 text-orange-400 font-base py-2 px-3  rounded ">
              Cập nhật
            </button>
            <button className="ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded ">
              Xóa
            </button>
          </div>
        </div>

        <div className="flex justify-between my-2">
          <p className="text-zinc-500 text-base font-bold mt-2 mb-2">
            Phạm Quốc Việt
          </p>
          <p className="text-blue-500 text-base font-bold mt-2 mb-2">
            Sacombank
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="text-zinc-400 text-sm font-medium mb-0">
              0987 6543 2334 5544
            </p>
          </div>
          <div className="col-md-6 md:flex md:justify-end">
            <p className="text-zinc-400 text-sm font-medium mb-0 ">
              Ngày hết hạn : 09/2/2022
            </p>
          </div>
        </div>
      </div>
      <div className="border w-full p-3 rounded mt-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="w-auto mx-auto object-cover object-center"
              src={require("../../../../assets/images/logo/card_icon.png")}
              alt="Avatar Upload"
            />
          </div>
          <div>
            <button className=" ml-2 bg-orange-100 hover:bg-orange-200 text-orange-400 font-base py-2 px-3  rounded ">
              Cập nhật
            </button>
            <button className="ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded ">
              Xóa
            </button>
          </div>
        </div>

        <div className="flex justify-between my-2">
          <p className="text-zinc-500 text-base font-bold mt-2 mb-2">
            Phạm Quốc Việt
          </p>
          <p className="text-blue-500 text-base font-bold mt-2 mb-2">
            Sacombank
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="text-zinc-400 text-sm font-medium mb-0">
              0987 6543 2334 5544
            </p>
          </div>
          <div className="col-md-6 md:flex md:justify-end">
            <p className="text-zinc-400 text-sm font-medium mb-0 ">
              Ngày hết hạn : 09/2/2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
