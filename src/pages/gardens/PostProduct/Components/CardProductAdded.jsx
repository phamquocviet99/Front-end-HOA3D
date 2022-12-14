import { AiOutlineClose } from "react-icons/ai";
import { BsFillPatchPlusFill } from "react-icons/bs";

export default function CardProductAdded() {
  return (
    <div className="w-full md:w-11/12 p-2 shadow rounded-lg">
      <img
        // className="h-44 w-full "
        className="img-responsive rounded-md "
        alt=""
        src={require("../../../../assets/images/image/test-flower.jpg")}
      />

      <p className="mt-3 text-xl font-bold mb-0">Hoa cúc vàng</p>

      <p className="mt-2 text-slate-500 mb-0">Danh mục : Hoa cúc</p>
      <p  className="mt-3 text-red-500 mb-0 font-bold">Giá : 220.000đ/kg</p>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center">
          <p className="mb-0  mr-1">Loại :</p>
          <div className=" rounded-full bg-green-600  flex justify-center items-center p-2 h-6 w-6">
            <p className="mb-0 text-white text-xs">A</p>
          </div>
        </div>
   
      </div>

      <div className="w-full flex justify-start items-center mt-3">
        <button title="Bán lại sản phẩm này" className="mb-1 w-full bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-lg ">
          <div className="flex justify-center items-center ">
          <i class="fa-solid fa-rotate-right text-lg"></i>
            <p className="mb-0 ml-3 text-base">Bán lại</p>
          </div>
        </button>
        <button title="Xóa sản phẩm này" className="mb-1 ml-1 bg-red-500 hover:bg-red-600 text-white font-sm p-2  rounded-full ">
          <AiOutlineClose className="text-2xl"/>
        </button>
      </div>
    </div>
  );
}
