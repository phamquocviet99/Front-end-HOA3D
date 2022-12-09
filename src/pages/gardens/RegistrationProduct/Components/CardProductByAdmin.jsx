export default function CardProductByAdmin() {
  return (
    <div className=" w-full mt-3 shadow-md rounded-lg">
    
      <img
        // className="h-48 w-full object-cover"
        className="img-responsive rounded-lg"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />
      <div className="mt-2">
        <p className="text-center font-bold text-base font-title-product mb-0">HOA NHÀI 3D</p>
      </div>
      <div className="flex items-center justify-center px-2">
        <button className="mt-2 mb-3 bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 border border-blue-700 rounded-lg w-full ">
          Đăng ký
        </button>
      </div>
    </div>
  );
}
