import { TbTrashX } from "react-icons/tb";

export default function CardHarvestProduct() {
  return (
    <div className=" w-full md:w-5/6 mt-3 shadow-md rounded-2xl">
      <img
        className="img-responsive rounded-2xl"
        alt=""
        src={require("../../../../assets/images/image/cuc-van-tho.jpg")}
      />
      <div className="px-2 mt-2">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold mb-0 ">Vạn thọ</p>
          <p className="text-slate-500 text-sm md:text-base mb-0"> 200kg</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <p className="mb-0 text-sm md:text-base mr-1">Loại :</p>
            <div className=" rounded-full bg-green-600  flex justify-center items-center p-2 h-6 w-6">
              <p className="mb-0 text-white text-xs">B</p>
            </div>
          </div>
          <div className="ml-4 flex items-center">
            <p className="mb-0 text-sm md:text-base mr-1">Màu :</p>
            <div className=" rounded-full bg-yellow-500  flex justify-center items-center p-2 h-6 w-6"></div>
          </div>
        </div>
        <p className="text-slate-500 text-sm md:text-base mt-2">Đến ngày: 22/12/2022</p>

        <div className="w-full flex justify-start items-center mt-3 pb-2">
          <button className="mb-1 w-full bg-blue-500 hover:bg-blue-600 text-white font-sm py-1 px-3  rounded-lg ">
            Thu hoạch
          </button>
          <button className="mb-1 ml-2 bg-red-500 hover:bg-red-600 text-white font-sm p-2  rounded-lg ">
            <TbTrashX />
          </button>
        </div>
      </div>
    </div>
  );
}
