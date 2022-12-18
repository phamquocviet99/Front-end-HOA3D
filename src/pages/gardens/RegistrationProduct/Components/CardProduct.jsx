import { useState } from "react";
import ModalPostProduct from "../../Modal/ModalPostProduct";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function CardProduct() {
  const [showPostProductModal, setShowPostProductModal] = useState(false);
  const handleClosePostProductModal = () => setShowPostProductModal(false);
  return (
    <div className="width-card shadow rounded-lg">
      <ModalPostProduct
        onClose={handleClosePostProductModal}
        visible={showPostProductModal}
      />
      <img
        // className="w-full h-52 rounded object-cover "
        className=" h-44 w-full object-cover rounded-t-lg"
        alt=""
        src={require("../../../../assets/images/image/test-flower.jpg")}
      />
      <div className="p-1">
        <p className=" text-center font-medium text-xl ml-1 mt-2 mb-2">Hoa Lan</p>

        <div className="flex justify-start items-center w-full ">
          <button
            title="Bán sản phẩm này"
            onClick={() => setShowPostProductModal(true)}
            className="mb-1 ml-1 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3  rounded-lg flex justify-center shadow-md  items-center "
          >
         
            <p className="mb-0 text-base">Bán</p>
          </button>
          <button
            title="Xóa sản phẩm này"
            className="mb-1 ml-1 bg-red-500 hover:bg-red-600 text-white font-sm p-2 shadow-md rounded-full "
          >
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
