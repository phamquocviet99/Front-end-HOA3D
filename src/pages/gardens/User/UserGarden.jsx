import React, { Children, useState } from "react";
import "./index.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdLocationOn, MdEmail, MdAttachMoney } from "react-icons/md";
import { TbPoint } from "react-icons/tb";
import ChangePasswordComponent from "./Components/ChangePasswordComponent";
import CardPaymentComponent from "./Components/CardPaymentComponent";
import EditUserComponent from "./Components/EditUserComponent";
import ProfileUserComponent from "./Components/ProfileUserComponent";
import TabHeader from "../../../components/TabHeader/TabHeader";
import ListShip from "./Components/ListShip";
import ProfileUser from "./Components/ProfileUser";
import EditProfileUser from "./Components/EditProfileUser";
import TransportList from "./Components/TransportList";
import { RiBillLine } from "react-icons/ri";
import { BiMessageSquareCheck } from "react-icons/bi";

export default function UserGarden() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const tabName = [
    {
      id: 1,

      name: "Tổng quan",
    },

    {
      id: 2,

      name: "Cài đặt thông tin",
    },
    {
      id: 3,

      name: "Thanh toán",
    },
    {
      id: 4,

      name: "Vận chuyển",
    },
  ];
  const listComponent = [
    {
      id: 1,
      element: <ProfileUser />,
    },
    {
      id: 2,
      element: <EditProfileUser />,
    },
    {
      id: 3,
      element: <CardPaymentComponent />,
    },
    {
      id: 4,
      element: <TransportList />,
    },
  ];

  // return <TabHeader tabName={tabName} listComponent={listComponent} />;
  return (
    <div className="">
      <div className="w-full rounded-lg bg-white shadow-md">
        <div className=" p-4 flex items-center">
          <img
            className=" w-40 h-40 rounded-lg"
            src={require("../../../assets/images/avartar/avartar.jpg")}
            alt="FMP"
          />
          <div className="ml-6">
            <div className="flex items-center">
              <p className="font-bold text-xl mb-0 mr-3">Galaxy Garden</p>
              <BsFillPatchCheckFill className="text-lg text-sky-500 mr-3" />
              <div className="flex py-0.5  px-2 bg-green-100 rounded-full">
                <p className="mb-0 text-xs font-extralight text-green-600">
                  Đã kích hoạt
                </p>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="flex items-center text-gray-400">
                <MdLocationOn className="text-lg" />
                <p style={{ fontSize: "13px" }} className="mb-0 ml-1">
                  Lâm Đồng, Đà Lạt
                </p>
              </div>
              <div className="flex items-center text-gray-400 ml-4">
                <MdEmail className="text-lg" />
                <p style={{ fontSize: "13px" }} className="mb-0 ml-1">
                  galaxygarden@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div className="border-2 border-dashed border-gray-300 w-32 rounded-lg py-2">
                <div className="flex items-center justify-center">
                  <RiBillLine className="mr-2 text-green-500" />
                  <p className="font-bold text-xl mb-0 text-center">3,241</p>
                </div>

                <p className="text-gray-400 mb-0 text-center">Tổng đơn</p>
              </div>
              <div className="border-2 border-dashed border-gray-300 w-32 rounded-lg py-2 ml-5">
                <div className="flex items-center justify-center">
                  <BiMessageSquareCheck className="mr-2 text-blue-500" />
                  <p className="font-bold text-xl mb-0 text-center">2,345</p>
                </div>

                <p className="text-gray-400 mb-0 text-center">Đơn hoàn tất</p>
              </div>
              <div className="border-2 border-dashed border-gray-300 w-32 rounded-lg py-2 ml-5">
                <div className="flex items-center justify-center">
                  <MdAttachMoney className="mr-2 text-red-500" />
                  <p className="font-bold text-xl mb-0 text-center">1,241</p>
                </div>

                <p className="text-gray-400 mb-0 text-center">Đơn đã cọc</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full rounded-xl md:rounded-b-none block md:flex items-center pl-5 bg-slate-50 md:bg-transparent md:pb-0">
          {tabName.map((t, index) => (
            <div key={index}>
              <div
                onClick={() => setIsActiveTab(t.id)}
                className={
                  isActiveTab === t.id
                    ? "element-tab-product-active md:border-b-4 md:border-blue-500 md:text-blue-500"
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
