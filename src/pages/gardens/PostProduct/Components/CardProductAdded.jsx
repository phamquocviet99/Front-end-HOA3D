export default function CardProductAdded() {
  return (
    <div className="p-2 shadow-md">
      <img
        className="h-44 w-full "
        alt=""
        src={require("../../../../assets/images/image/testflower.jpg")}
      />
      <div className="flex justify-between items-center mt-2">
        <p className="text-base font-bold mb-0">Hoa cúc</p>
        <p className="text-green-600 mb-0">200.000đ/kg</p>
      </div>
      <p className="mt-2 text-slate-400 mb-0">Danh mục : Hoa cúc</p>

      <div className="flex items-center mt-3">
        <p className="mb-0 font-bold mr-2">Loại :</p>
        <div className=" ml-2 rounded-full bg-green-600  flex justify-center items-center p-2 h-8 w-8">
          <p className="mb-0 text-white">A</p>
        </div>
        <div className=" ml-2 rounded-full bg-green-600  flex justify-center items-center p-2 h-8 w-8">
          <p className="mb-0 text-white">A</p>
        </div>
        <div className=" ml-2 rounded-full bg-green-600  flex justify-center items-center p-2 h-8 w-8">
          <p className="mb-0 text-white">A</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button class=" mt-3 mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded ">
          Bán lại
        </button>
      </div>
    </div>
  );
}
