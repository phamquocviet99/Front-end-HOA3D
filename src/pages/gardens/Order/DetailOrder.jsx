import { useNavigate } from "react-router-dom";

export default function DetailOrder() {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-white rounded-lg">
      <p className=" text-center text-2xl  text-blue-600">
        CHI TIẾT ĐƠN HÀNG HD1
      </p>
      <div className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <p className="text-xl ">Thông tin nhà vườn</p>
            <div className="row">
              <div className="col-md-6">
                <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                  Tên chủ nhà vườn :
                </p>
              </div>
              <div className="col-md-6">
                <p className=" text-sm md:text-base font-medium mb-3">
                  Ba Garden
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                  Tên nhà vườn :
                </p>
              </div>
              <div className="col-md-6">
                <p className=" text-sm md:text-base font-medium mb-3">
                  Ba Vườn
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                  Số điện thoại :
                </p>
              </div>
              <div className="col-md-6">
                <p className=" text-sm md:text-base font-medium mb-3">
                  0909959619
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                  Địa chỉ :
                </p>
              </div>
              <div className="col-md-6">
                <p className=" text-sm md:text-base font-medium mb-3">
                  B12/20 Lê Sao
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-xl">Thông tin cửa hàng</p>
            <div className="row">
              <div className="col-md-6">
                <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                  Tên cửa hàng :
                </p>
              </div>
              <div className="col-md-6">
                <p className=" text-sm md:text-base font-medium mb-3">
                  Minh Lan Shop
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                  Tên chủ cửa hàng :
                </p>
              </div>
              <div className="col-md-6">
                <p className=" text-sm md:text-base font-medium mb-3">
                  Nguyễn Minh Lan
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                  Số điện thoại :
                </p>
              </div>
              <div className="col-md-6">
                <p className=" text-sm md:text-base font-medium mb-3">
                  0909959619
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                  Địa chỉ :
                </p>
              </div>
              <div className="col-md-6">
                <p className=" text-sm md:text-base font-medium mb-3">
                  1230 Đường 3/2, Quận 6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xl mt-3">Thông tin đơn hàng</p>
      <div className="row ">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                Ngày đặt hàng :
              </p>
            </div>
            <div className="col-md-6">
              <p className=" text-sm md:text-base font-medium mb-3">
                22/11/2022
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                Ngày giao hàng dự kiến
              </p>
            </div>
            <div className="col-md-6">
              <p className=" text-sm md:text-base font-medium mb-3">
                22/11/2022
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                Địa chỉ nhận hàng
              </p>
            </div>
            <div className="col-md-6">
              <p className=" text-sm md:text-base font-medium mb-3">
                1234 đường 3/2 Quận 6
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                Mã giao hàng
              </p>
            </div>
            <div className="col-md-6">
              <p className=" text-sm md:text-base font-medium mb-3">TB22033</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                Chành xe
              </p>
            </div>
            <div className="col-md-6">
              <p className=" text-sm md:text-base font-medium mb-3">
                Phương Trang
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className=" text-gray-500 text-sm md:text-base  mb-3 ">
                Số điện thoại chành xe
              </p>
            </div>
            <div className="col-md-6">
              <p className=" text-sm md:text-base font-medium mb-3">
                0909090909
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto relative mt-3">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 ">
                Tên sản phẩm
              </th>
              <th scope="col" className="py-3 px-6">
                Đơn giá
              </th>
              <th scope="col" className="py-3 px-6">
                Số lượng
              </th>
              <th scope="col" className="py-3 px-6 ">
                Giá
              </th>
            </tr>
          </thead>
          <tbody>
            <tr clclassNameass="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hoa Lan Trắng
              </th>
              <td className="py-4 px-6">15</td>
              <td className="py-4 px-6">500.000</td>
              <td className="py-4 px-6">7.500.000</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hoa Lan Trắng
              </th>
              <td className="py-4 px-6">15</td>
              <td className="py-4 px-6">500.000</td>
              <td className="py-4 px-6">7.500.000</td>
            </tr>
            <tr clclassNameass="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hoa Lan Trắng
              </th>
              <td className="py-4 px-6">15</td>
              <td className="py-4 px-6">500.000</td>
              <td className="py-4 px-6">7.500.000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900  bg-gray-100">
              <th scope="row" class="py-3 px-6 text-base">
                Tổng cộng
              </th>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6">21,000,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => navigate(-1)}
          title="Trở về trang trước"
          className="ml-2 bg-red-400 hover:bg-red-500 text-white font-base py-2 px-3    rounded "
        >
          Trở về
        </button>
      </div>
    </div>
  );
}
