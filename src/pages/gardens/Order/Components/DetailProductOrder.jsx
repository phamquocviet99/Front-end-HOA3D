import { FaUserCircle,FaFlagCheckered } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import {CgCalendarDates} from "react-icons/cg"

export default function DetailProductOrder() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-white rounded-lg py-4 px-4 shadow-md ">
            <p className="text-xl font-bold">Thông tin nhà vườn</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <FaUserCircle className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Nhà vườn :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">Ba Garden</p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <HiDevicePhoneMobile className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Số điện thoại :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">0906959619</p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <MdLocationOn className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Địa chỉ :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">
                B12/20 Lê Sao Tân Phú
              </p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <CgCalendarDates className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Ngày đặt cọc :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">22/3/2002</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-white rounded-lg py-4 px-4 shadow-md ">
            <p className="text-xl font-bold">Thông tin cửa hàng</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <FaUserCircle className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Cửa hàng :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">Minh Lan Shop</p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <HiDevicePhoneMobile className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Số điện thoại :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">0906959619</p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <MdLocationOn className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Địa chỉ :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">
                B12/20 đường 3/2 TPHCM
              </p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <CgCalendarDates className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Ngày đặt cọc :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">11/2/2022</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-white rounded-lg py-4 px-4 shadow-md ">
            <p className="text-xl font-bold">Thông tin đơn hàng</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <FaUserCircle className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Mã hóa đơn :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">HD11</p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <HiDevicePhoneMobile className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Tổng tiền :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">12.000.000đ</p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <FaFlagCheckered className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Tình trạng :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">Đã hoàn thành</p>
            </div>
            <div className="line-y mt-3" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <CgCalendarDates className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">
                  Ngày hoàn thành :
                </p>
              </div>
              <p className="mb-0 text-gray-600 text-base">3/12/2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="bg-white rounded-lg py-4 px-4 shadow-md ">
            <div className="flex justify-between items-center">
              <p className="text-xl mb-0 font-bold">Giao hàng</p>
              <p className="mb-0 text-gray-400 text-base">
                Mã giao hàng : TB2234
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <MdLocationOn className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">
                  Địa chỉ giao hàng :
                </p>
              </div>
              <p className="mb-0 text-gray-600 text-base">
                123 Phan Bội Châu Đà Lạt
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <CgCalendarDates className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Ngày giao hàng :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">22/3/2022</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white rounded-lg py-4 px-4 shadow-md ">
            <div className="flex justify-between items-center">
              <p className="text-xl mb-0 font-bold">Nhận hàng</p>
              <p className="mb-0 text-gray-400 text-base">
                Điện thoại : 0902666888
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <MdLocationOn className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">
                  Địa chỉ nhận hàng :
                </p>
              </div>
              <p className="mb-0 text-gray-600 text-base">
                123 Phan Bội Châu Đà Lạt
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <CgCalendarDates className="text-gray-400 mr-2 text-xl" />
                <p className="mb-0 text-gray-400 text-base">Ngày nhận hàng :</p>
              </div>
              <p className="mb-0 text-gray-600 text-base">22/3/2022</p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto relative bg-white p-2 rounded-lg mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 rounded-l-lg">
                Tên sản phẩm
              </th>
              <th scope="col" class="py-3 px-6">
                Số lượng
              </th>
              <th scope="col" class="py-3 px-6 rounded-r-lg">
                Đơn giá
              </th>
              <th scope="col" class="py-3 px-6 rounded-r-lg">
                Thành tiền
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hoa lan trắng
              </th>
              <td class="py-4 px-6">100kg</td>
              <td class="py-4 px-6">2999</td>
              <td class="py-4 px-6">2999</td>
            </tr>
           
            
          </tbody>
          <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
              <th scope="row" class="py-3 px-6 text-base">
                Tổng tiền
              </th>
              <td class="py-3 px-6"></td>
              <td class="py-3 px-6"></td>
              <td class="py-3 px-6">21,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
