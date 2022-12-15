export default function HistoryDetailOrder() {
  return (
    <div className="bg-white rounded-lg py-4 px-4 shadow-md ">
      <p className="text-xl font-bold">Lịch sử đơn hàng</p>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Ngày cập nhật
              </th>
              <th scope="col" class="py-3 px-6">
                Ghi chú
              </th>
              <th scope="col" class="py-3 px-6">
                Tình trạng đơn
              </th>
              <th scope="col" class="py-3 px-6">
                Thông báo cửa hàng
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                12/12/2022
              </th>
              <td class="py-4 px-6"></td>
              <td class="py-4 px-6">Đặt hàng</td>
              <td class="py-4 px-6">Không</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                13/12/2022
              </th>
              <td class="py-4 px-6">Chờ cửa hàng cọc</td>
              <td class="py-4 px-6">Cửa hàng cọc</td>
              <td class="py-4 px-6">Không</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                13/12/2022
              </th>
              <td class="py-4 px-6"></td>
              <td class="py-4 px-6">Nhà vườn cọc</td>
              <td class="py-4 px-6">Không</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                14/12/2022
              </th>
              <td class="py-4 px-6"></td>
              <td class="py-4 px-6">Đang giao hàng</td>
              <td class="py-4 px-6">Không</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                13/12/2022
              </th>
              <td class="py-4 px-6"></td>
              <td class="py-4 px-6">Nhận hàng</td>
              <td class="py-4 px-6">Không</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                13/12/2022
              </th>
              <td class="py-4 px-6"></td>
              <td class="py-4 px-6">Hoàn thành</td>
              <td class="py-4 px-6">Không</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
