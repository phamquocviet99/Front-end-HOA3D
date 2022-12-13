import { useState } from "react";
import ModalPostProduct from "../../Modal/ModalPostProduct";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function CardProduct() {
  const [showPostProductModal, setShowPostProductModal] = useState(false);
  const handleClosePostProductModal = () => setShowPostProductModal(false);
  return (
    <div className="  border-2 w-full rounded-xl p-1 shadow-md">
      <ModalPostProduct
        onClose={handleClosePostProductModal}
        visible={showPostProductModal}
      />
      <img
        // className="w-full h-52 rounded object-cover "
        className="img-responsive rounded-lg"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />

      <p className="text-green-800 text-center text-base ml-1 mt-2 mb-2">
        Hoa Lan
      </p>

      <div className="flex justify-start items-center w-full ">
        <button
        title="Bán sản phẩm này"
          onClick={() => setShowPostProductModal(true)}
          className="mb-1 ml-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-base py-1 px-3  rounded-lg flex justify-center items-center "
        >
          <i class="fa-solid fa-check-double xl mr-2"></i>
          Bán
        </button>
        <button title="Xóa sản phẩm này" className="mb-1 ml-2 bg-red-500 hover:bg-red-600 text-white font-sm p-2  rounded-full ">
          <AiOutlineClose className="text-xl"/>
        </button>
      </div>
    </div>
  );
}
