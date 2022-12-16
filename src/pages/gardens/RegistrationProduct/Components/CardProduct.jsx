import { useState } from "react";
import ModalPostProduct from "../../Modal/ModalPostProduct";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function CardProduct() {
  const [showPostProductModal, setShowPostProductModal] = useState(false);
  const handleClosePostProductModal = () => setShowPostProductModal(false);
  return (
    <div className="  border-2 width-card-6 rounded-xl p-1 shadow-md">
      <ModalPostProduct
        onClose={handleClosePostProductModal}
        visible={showPostProductModal}
      />
      <img
        // className="w-full h-52 rounded object-cover "
        className="img-responsive rounded-t-lg"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />

      <p className=" text-center font-bold text-xl ml-1 mt-2 mb-2">
        Hoa Lan
      </p>

      <div className="flex justify-start items-center w-full ">
        <button
        title="Bán sản phẩm này"
          onClick={() => setShowPostProductModal(true)}
          className="mb-1 ml-1 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3  rounded-lg flex justify-center items-center "
        >
          <i class="fa-regular fa-circle-check text-xl"></i>
          <p className="mb-0 ml-3 text-base">Bán</p>
        </button>
        <button title="Xóa sản phẩm này" className="mb-1 ml-1 bg-red-500 hover:bg-red-600 text-white font-sm p-2  rounded-full ">
          <AiOutlineClose className="text-2xl"/>
        </button>
      </div>
    </div>
  );
}
