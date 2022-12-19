
export default function CardProductShop() {
  return (
    <div  className="border-2 w-full mx-2 test-width rounded-2xl shadow-md">
      <img
        className="w-full h-44 rounded-t-xl object-cover "
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />
      <div className="py-2 px-3">
        <div className="flex justify-between items-center my-2">
          <p className=" text-xl font-bold mb-0">Hoa Lan</p>
          <div className=" rounded-full bg-green-600  flex justify-center items-center p- h-7 w-7">
            <p className="mb-0 text-white text-base">A</p>
          </div>
        </div>

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

        <div className="flex justify-start items-center w-full mt-3">
          <button
            title="Bán sản phẩm này"
            className="shadow-md mb-1 ml-1 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3  rounded-lg flex justify-center items-center "
          >
            <p className="mb-0 ml-3 text-base">Bán</p>
          </button>
        </div>
      </div>
    </div>
  );
}
