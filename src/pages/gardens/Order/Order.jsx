import { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import PostedProduct from "../PostProduct/Components/PostedProduct";
import ListProductAdded from "../RegistrationProduct/Components/ListProductAdded";
import ListProductByAdmin from "../RegistrationProduct/Components/ListProductByAdmin";
import CompleteOrder from "./Components/CompleteOrder";
import CurrentOrder from "./Components/CurrentOrder";
import PrepareOrder from "./Components/PrepareOrder";

export default function Order(){
    const [isActiveTab, setIsActiveTab] = useState(1);
  const tabProduct = [
    {
      id: 1,

      name: "Đơn hàng đang có",
    },

    {
      id: 2,

      name: "Đơn hàng chuẩn bị",
    },
    {
      id: 3,

      name: "Đơn hàng hoàn thành",
    },
  ];
  const ListContentProduct = [
    {
      id: 1,
      element: <CurrentOrder />,
    },
    {
      id: 2,
      element: <PrepareOrder />,
    },
    {
      id: 3,
      element: <CompleteOrder />,
    },
  ];

  return (
    <div className="card-element w-full ">
      <div className=" w-full bg-blue-500 rounded-xl m md:rounded-b-none block md:flex p-res-pro items-center">
        <AiFillAppstore className="hidden md:block text-2xl mx-6 text-white mt-3" />
        {tabProduct.map((t, index) => (
          <div key={index}>
            <div
              onClick={() => setIsActiveTab(t.id)}
              className={
                isActiveTab === t.id
                  ? "element-tab-product-active"
                  : "element-tab-product"
              }
            >
              {t.name}
            </div>
          </div>
        ))}
      </div>
      {ListContentProduct?.map((l, index) => (
        <div className={isActiveTab === l.id ? "" : "hidden"}>{l.element}</div>
      ))}
    </div>
  );
}