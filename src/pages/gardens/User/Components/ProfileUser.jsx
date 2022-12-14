export default function ProfileUser() {
  return (
    <div className="rounded-lg bg-white">
      <div className="py-3 px-4 flex justify-between items-center">
        <p style={{ fontSize: "17px" }} className="font-bold mb-0 mr-3">
          Trang cá nhân
        </p>
        <button title="Cập nhật tài khoản" className="shadow-md bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded-lg">
          Cập nhật
        </button>
      </div>
      <div className="line-y" />
      <div className="p-4">
        <div className="row">
          <div className="col-md-3">
            <p className="text-gray-400  mb-3">Tên chủ nhà vườn:</p>
          </div>
          <div className="col-md-9">
            <p className="text-gray-800  mb-3">Phạm Quốc Việt</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="text-gray-400 mb-3">Tên nhà vườn:</p>
          </div>
          <div className="col-md-9">
            <p className="text-gray-800  mb-3">Vườn Lan Garden</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="text-gray-400  mb-3">Email:</p>
          </div>
          <div className="col-md-9">
            <p className="text-gray-800  mb-3">viet12@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="text-gray-400  mb-3">Số điện thoại:</p>
          </div>
          <div className="col-md-9">
            <p className="text-gray-800  mb-3">0906959619</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="text-gray-400  mb-3">Địa chỉ vườn:</p>
          </div>
          <div className="col-md-9">
            <p className="text-gray-800  mb-3">B12/20A Ấp 2</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="text-gray-400  mb-3">Phường/Xã</p>
          </div>
          <div className="col-md-9">
            <p className="text-gray-800  mb-3">Tân Quý Tây</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="text-gray-400  mb-3">Quận/Huyện</p>
          </div>
          <div className="col-md-9">
            <p className="text-gray-800  mb-3">Bình Chánh</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="text-gray-400  mb-3">Thành phố/Tỉnh</p>
          </div>
          <div className="col-md-9">
            <p className="text-gray-800  mb-3">Hồ Chí Minh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
