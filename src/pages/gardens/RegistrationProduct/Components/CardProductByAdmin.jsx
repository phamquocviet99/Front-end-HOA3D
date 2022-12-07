export default function CardProductByAdmin() {
  return (
    <div className="w-full mt-3">
      <img
        className="h-44 w-full object-cover"
        alt=""
        src={require("../../../../assets/images/avartar/avartar.jpg")}
      />
      <div>
        <p>Tên : Hoa Nhài POR</p>
        <p>Danh mục : Hoa Nhài</p>
      </div>
      <div className="flex items-center justify-center">
        <button class=" mt-3 mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded ">
          Bán lại
        </button>
      </div>
    </div>
  );
}
