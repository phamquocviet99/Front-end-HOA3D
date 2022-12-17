import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailProductOrder from "./Components/DetailProductOrder";
import HistoryDetailOrder from "./Components/HistoryDetailoOrder";
import { FaUserCircle } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
export default function DetailOrder() {
  const navigate = useNavigate();
  const [isActiveTab, setIsActiveTab] = useState(1);
  const tabName = [
    {
      id: 1,

      name: "Chi tiết đơn hàng",
    },
    {
      id: 2,

      name: "Lịch sử đơn hàng",
    },
  ];
  const listComponent = [
    {
      id: 1,
      element: <DetailProductOrder />,
    },
    {
      id: 2,
      element: <HistoryDetailOrder />,
    },
  ];
  return (
    <div className=" ">
      <div className="bg-white rounded-md shadow-md w-full">
        <div className="py-3 px-4 flex justify-between items-center">
          <p style={{ fontSize: "20px" }} className="font-bold mb-0 mr-3">
            Đơn hàng HD1
          </p>
          <button
            onClick={() => navigate(-1)}
            title="Trở về trang trước"
            className="ml-2 bg-gray-400 hover:bg-gray-600 text-white font-base py-2 px-3  rounded "
          >
            Trở về
          </button>
        </div>
        <div className="line-y"/>
        <div className="w-full  block sm:flex items-center pl-5 sm:bg-transparent padding-tab-bottom">
          {tabName.map((t, index) => (
            <div key={index}>
              <div
                onClick={() => setIsActiveTab(t.id)}
                className={
                  isActiveTab === t.id
                    ? "element-tab-product-active sm:border-b-4 sm:border-blue-500 sm:text-blue-500"
                    : "element-tab-product text-gray-400 border-b-4 border-transparent hover:border-b-4 hover:border-blue-400 hover:text-blue-400"
                }
              >
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  mt-4">
        {listComponent?.map((l, index) => (
          <div key={index} className={isActiveTab === l.id ? "" : "hidden"}>
            {l.element}
          </div>
        ))}
      </div>
    </div>
  );
}
