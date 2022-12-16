export default function HistoryDetailOrder() {
  return (
    <div className="bg-white rounded-lg py-4 px-4 shadow-md ">
      <p className="text-xl font-bold">Lịch sử đơn hàng</p>

      <div className="overflow-x-auto mt-3 relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Ngày cập nhật
              </th>
              <th scope="col" className="py-3 px-6">
                Ghi chú
              </th>
              <th scope="col" className="py-3 px-6">
                Tình trạng đơn
              </th>
              <th scope="col" className="py-3 px-6">
                Thông báo cửa hàng
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                12/12/2022
              </th>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">Đặt hàng</td>
              <td className="py-4 px-6">Không</td>
            </tr>
            <tr className="bg-white border-b day-800 ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                13/12/2022
              </th>
              <td className="py-4 px-6">Chờ cửa hàng cọc</td>
              <td className="py-4 px-6">Cửa hàng cọc</td>
              <td className="py-4 px-6">Không</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                13/12/2022
              </th>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">Nhà vườn cọc</td>
              <td className="py-4 px-6">Không</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                14/12/2022
              </th>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">Đang giao hàng</td>
              <td className="py-4 px-6">Không</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                13/12/2022
              </th>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">Nhận hàng</td>
              <td className="py-4 px-6">Không</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                13/12/2022
              </th>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">Hoàn thành</td>
              <td className="py-4 px-6">Không</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
