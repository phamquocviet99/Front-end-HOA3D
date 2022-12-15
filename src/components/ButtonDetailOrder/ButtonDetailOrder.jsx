import { useNavigate } from "react-router-dom";
export default function ButtonDetailOrder({ props }) {
  const navigate = useNavigate();

  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }
  return (
    <button
      title="Xem chi tiết đơn hàng"
      // onClick={() => setShowDetailOrderModal(true)}
      onClick={goToDetail}
      className=" bg-blue-500 hover:bg-blue-600 text-white text-sm  py-2 px-3 border border-blue-700 rounded-lg shadow-md"
    >
      Chi tiết
    </button>
  );
}
