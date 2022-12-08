export default function CardProductAdded() {
  return (
    <div className="p-3 shadow-lg">
      <img
        className="h-44 w-full "
        alt=""
        src={require("../../../../assets/images/image/testflower.jpg")}
      />

      <p className="mt-3 text-xl font-bold mb-0">Hoa cúc</p>

      <p className="mt-2 text-slate-400 mb-0">Danh mục : Hoa cúc</p>
      <div
        className="bg-neutral-300 mt-3"
        style={{ height: "1px", width: "100%" }}
      ></div>
      <div className="flex items-center mt-3">
        <p className="mb-0 font-bold mr-2">Loại :</p>
        <div className=" ml-2 rounded-full bg-green-600  flex justify-center items-center p-2 h-8 w-8">
          <p className="mb-0 text-white">A</p>
        </div>
        <div className=" ml-2 rounded-full bg-slate-200  flex justify-center items-center p-2 h-8 w-8">
          <p className="mb-0 text-slate-400">B</p>
        </div>
        <div className=" ml-2 rounded-full bg-slate-200 flex justify-center items-center p-2 h-8 w-8">
          <p className="mb-0 text-slate-400">C</p>
        </div>
        <div className=" ml-2 rounded-full  bg-slate-200 flex justify-center items-center p-2 h-8 w-8 ">
          <p className="mb-0 text-slate-400">D</p>
        </div>
      </div>
      <div
        className="bg-neutral-300 mt-3"
        style={{ height: "1px", width: "100%" }}
      ></div>
      <div className="flex items-center mt-3">
        <p className="mb-0 font-bold mr-2">Màu sắc :</p>
        <div className=" ml-2 rounded-lg bg-pink-600  flex justify-center items-center p-2 h-8 w-8"></div>
      </div>
      <div className="flex items-center justify-between">
        <button class=" mt-3 mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded-full ">
          Bán lại
        </button>
        <p className="mb-0 mt-2 font-bold">220.000đ/kg</p>
      </div>
    </div>
  );
}
