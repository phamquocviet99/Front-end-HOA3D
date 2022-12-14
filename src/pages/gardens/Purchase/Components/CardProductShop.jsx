export default function CardProductShop() {
  return (
    <div className="border-2 w-full rounded-2xl m-2 shadow-md">
      <img
        className="w-full h-44 rounded-t-xl object-cover "
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />
      <div className="py-2 px-3">
        <p className=" text-lg  mb-2">Hoa Lan</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-base mb-1">Cửa hàng :</p>
          <p className=" text-base mb-1">Hồng Hạnh</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-base mb-1">Số lượng :</p>
          <p className=" text-base mb-1">15kg</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-base mb-1">Đơn giá :</p>
          <p className=" text-base mb-1">300.000đ/kg</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 text-base mb-0 mr-3">Loại :</p>
          <div className=" rounded-full bg-green-600  flex justify-center items-center p-2 h-6 w-6">
            <p className="mb-0 text-white text-xs">A</p>
          </div>
        </div>
        <div className="flex justify-start items-center w-full mt-3">
          <button
            title="Bán sản phẩm này"
            className="shadow-md mb-1 ml-1 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3  rounded-lg flex justify-center items-center "
          >
            <i class="fa-solid fa-check-double text-lg mr-2"></i>
            <p className="mb-0 ml-3 text-base">Bán</p>
          </button>
        </div>
      </div>
    </div>
  );
}
