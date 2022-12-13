export default function CardShip() {
  return (
    <div className="border w-full p-3 rounded mt-2 shadow-md">
      <div className="flex justify-between items-center">
        <p className="mb-0 text-sm md:text-2xl font-bold text-blue-500">
          Thành Bưởi
        </p>
        <div className="flex">
          <button className="text-sm ml-2 bg-orange-100 hover:bg-orange-200 text-orange-400 font-base py-2 px-3  rounded ">
            Cập nhật
          </button>
          <button className=" text-sm ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded ">
            Xóa
          </button>
        </div>
      </div>

      <div className="hidden md:block row mt-3">
        <div className="col-md-6">
          <div className="flex justify-between items-center md:hidden">
            <p className="font-bold text-base text-gray-500">Số điện thoại :</p>
            <p className="text-base text-gray-500">0909659999</p>
          </div>
          <div className=" row">
            <div className="col-md-6 hidden md:block">
              <p className="font-bold text-base text-gray-500">
                Số điện thoại:
              </p>
            </div>
            <div className="col-md-6 hidden md:block">
              <p className="text-base text-gray-500">0909659999</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="font-bold text-base text-gray-500 mb-0">
                Nơi giao hàng:
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-base text-gray-500 mb-0">
                289 Phan Bội Châu Đà Lạt
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <p className="font-bold text-base text-gray-500 mb-0">
                Nơi nhận hàng:
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-base text-gray-500 mb-0">
                - 226 Lê Hồng Phong TP.HCM
              </p>
              <p className="text-base text-gray-500 mb-0">
                - Bến xe miền Tây
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
}
