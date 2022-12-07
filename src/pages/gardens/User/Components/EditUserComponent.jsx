export default function EditUserComponent() {
  return (
    <div className="card-edit-user p-4">
      <h4 className="text-zinc-500 text-xl mb-3 font-medium">
        Cập nhật thông tin nhà vườn
      </h4>
      <div className="line-page" />
      <div className="row mb-4 mt-4">
        <div className="col-md-4">
          <p className="text-slate-500 text-sm font-bold">Ảnh đại diện</p>
        </div>
        <div className="col-md-8">
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
                <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full">
                  Select Avatar
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="text-slate-500 text-sm font-bold">Tên chủ nhà vườn</p>
        </div>
        <div className="col-md-8">
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Tên chủ nhà vườn"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="text-slate-500 text-sm font-bold">Tên nhà vườn</p>
        </div>
        <div className="col-md-8">
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Tên chủ nhà vườn"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="text-slate-500 text-sm font-bold">Email</p>
        </div>
        <div className="col-md-8">
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Viet@121gmail.com"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="text-slate-500 text-sm font-bold">Địa chỉ vườn</p>
        </div>
        <div className="col-md-8">
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="B12/20A"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="text-slate-500 text-sm font-bold">Phường/Xã</p>
        </div>
        <div className="col-md-8">
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Tân Quý Tây"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="text-slate-500 text-sm font-bold">Quận/Huyện</p>
        </div>
        <div className="col-md-8">
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Bình Chánh"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="text-slate-500 text-sm font-bold">Thành phố</p>
        </div>
        <div className="col-md-8">
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Hồ Chí Minh"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button class=" mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded ">
          Cập nhật thông tin
        </button>
      </div>
    </div>
  );
}
