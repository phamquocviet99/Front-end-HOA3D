import { useState } from "react";
import ModalAddCard from "../ModalAddCard";

export default function CardPaymentComponent() {
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
      <div className="row p-4 ">
        <div className="col-md-6">
          <div className="border w-full p-3 rounded mt-2 shadow-md">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  className="w-auto mx-auto object-cover object-center"
                  src={require("../../../../assets/images/logo/card_icon.png")}
                  alt="Avatar Upload"
                />
              </div>
              <div className="flex">
                <button className="shadow-md text-sm ml-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-3  rounded ">
                  Cập nhật
                </button>
                <button className="shadow-md text-sm ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded ">
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
        <div className="col-md-6">
          <div className="border w-full p-3 rounded mt-2 shadow-md">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  className="w-auto mx-auto object-cover object-center"
                  src={require("../../../../assets/images/logo/card_icon.png")}
                  alt="Avatar Upload"
                />
              </div>
              <div className="flex">
                <button className="shadow-md text-sm ml-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-3  rounded ">
                  Cập nhật
                </button>
                <button className="shadow-md text-sm ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded ">
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
      </div>
    </div>
  );
}
