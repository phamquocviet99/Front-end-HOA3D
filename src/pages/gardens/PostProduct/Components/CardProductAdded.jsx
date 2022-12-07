export default function CardProductAdded() {
  return (
    <div className="border h-32 w-full flex justify-between">
      <div className="flex items-center">
        <img
          className="w-44 h-full object-cover"
          alt=""
          src={require("../../../../assets/images/avartar/avartar.jpg")}
        />

        <div>
          <p>Tên : Hoa Lài PED</p>
          <p>Danh mục : Hoa Lài</p>
          <p>Giá : 200.000vnđ/kg</p>
        </div>
      </div>
      <div className="flex items-center mr-4">
        <button class=" mt-3 mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded ">
          Bán lại
        </button>
      </div>
    </div>
  );
}
