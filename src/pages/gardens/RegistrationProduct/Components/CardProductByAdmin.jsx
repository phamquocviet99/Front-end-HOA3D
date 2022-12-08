export default function CardProductByAdmin() {
  return (
    <div className=" relative w-full mt-3 shadow-lg">
      <div className="absolute bg-violet-800 flex justify-center items-center p-2 rounded-full top-2 left-2">
        <p className="mb-0 text-sx text-white font-extralight">BÁN TỐT</p>
      </div>
      <img
        className="h-48 w-full object-cover"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />
      <div className="mt-3">
        <p className="text-center font-bold text-xl font-title-product mb-2">HOA NHÀI 3D</p>
        <p className="text-center mb-0">Thuộc nhóm Hoa Nhà</p>
      </div>
      <div className="flex items-center justify-center ">
        <button className="font-bold mt-3 mb-3 bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 border border-blue-700 rounded-full ">
          Đăng ký
        </button>
      </div>
    </div>
  );
}
