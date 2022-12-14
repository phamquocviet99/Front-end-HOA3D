import ChangePasswordComponent from "./ChangePasswordComponent";

export default function EditProfileUser() {
  return (
    <div>
      <div className="rounded-lg bg-white shadow-md">
        <div className="py-4 px-4 flex justify-between items-center">
          <p style={{ fontSize: "17px" }} className="font-bold mb-0 mr-3">
            Trang cá nhân
          </p>
        </div>
        <div className="line-y" />
        <div className="p-4">
          <div className="row mb-4 mt-2">
            <div className="col-md-3">
              <p className="color-bold mb-0 text-base">Ảnh đại diện</p>
            </div>
            <div className="col-md-9">
              <div className="flex justify-center center mx-auto">
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-center w-48">
                  <div className="mb-2">
                    <img
                      className="w-auto mx-auto rounded-full object-cover object-center"
                      src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg"
                      alt="Avatar Upload"
                    />
                  </div>
                  <label className="cursor-pointer mt-6">
                    <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white  rounded-full">
                      Chọn ảnh
                    </span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <p className="color-bold mb-0 text-base">Tên chủ nhà vườn : </p>
            </div>
            <div className="col-md-9">
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Tên chủ nhà vườn"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <p className="color-bold mb-0 text-base">Tên nhà vườn</p>
            </div>
            <div className="col-md-9">
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Tên chủ nhà vườn"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <p className="color-bold mb-0 text-base">Email</p>
            </div>
            <div className="col-md-9">
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Viet@121gmail.com"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <p className="color-bold mb-0 text-base">Địa chỉ vườn</p>
            </div>
            <div className="col-md-9">
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="B12/20A"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <p className="color-bold mb-0 text-base">Phường/Xã</p>
            </div>
            <div className="col-md-9">
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Tân Quý Tây"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <p className="color-bold mb-0 text-base">Quận/Huyện</p>
            </div>
            <div className="col-md-9">
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Bình Chánh"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <p className="color-bold mb-0 text-base">Thành phố</p>
            </div>
            <div className="col-md-9">
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Hồ Chí Minh"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              title="Cập nhật thông tin cá nhân"
              className="shadow-md mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded "
            >
              Cập nhật thông tin
            </button>
          </div>
        </div>
      </div>
      <ChangePasswordComponent />
    </div>
  );
}
