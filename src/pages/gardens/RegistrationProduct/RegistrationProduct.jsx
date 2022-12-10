import { useState } from "react";
import CardProduct from "./Components/CardProduct";
import ListProductByAdmin from "./Components/ListProductByAdmin";
import "./RegistionProduct.css";
import { AiFillAppstore, AiFillCodeSandboxSquare } from "react-icons/ai";
import ListProductAdded from "./Components/ListProductAdded";
import PostedProduct from "../PostProduct/Components/PostedProduct";

export default function RegistrationProduct() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const tabProduct = [
    {
      id: 1,

      name: "Sản phẩm đang bán",
    },

    {
      id: 2,

      name: "Sản phẩm của tôi",
    },
    {
      id: 3,

      name: "Thêm sản phẩm mới",
    },
  ];
  const ListContentProduct = [
    {
      id: 1,
      element: <PostedProduct />,
    },
    {
      id: 2,
      element: <ListProductAdded />,
    },
    {
      id: 3,
      element: <ListProductByAdmin />,
    },
  ];

  return (
    <div className="card-element w-full ">
      <div className=" w-full rounded-xl md:rounded-b-none block md:flex p-res-pro items-center pl-5">
        {tabProduct.map((t, index) => (
          <div key={index}>
            <div
              onClick={() => setIsActiveTab(t.id)}
              className={
                isActiveTab === t.id
                  ? "element-tab-product-active border-b-4 border-blue-500 text-blue-500"
                  : "element-tab-product text-gray-400 border-b-4 border-transparent hover:border-b-4 hover:border-blue-400 hover:text-blue-400"
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
