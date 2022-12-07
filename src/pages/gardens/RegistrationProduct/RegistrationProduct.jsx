import { useState } from "react";
import CardProduct from "./Components/CardProduct";
import ListProductByAdmin from "./Components/ListProductByAdmin";
import "./RegistionProduct.css";
import { AiFillAppstore, AiFillCodeSandboxSquare } from "react-icons/ai";
import ListProductAdded from "./Components/ListProductAdded";

export default function RegistrationProduct() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const tabProduct = [
    {
      id: 1,
      icon: <AiFillAppstore className="text-xl" />,
      name: "Sản phẩm sàn quy định",
    },

    {
      id: 2,
      icon: <AiFillCodeSandboxSquare className="text-xl" />,
      name: "Sản phẩm bạn đã đăng ký",
    },
  ];
  const ListProductList = [
    {
      id: 1,
      element: <ListProductByAdmin />,
    },
    {
      id: 2,
      element: <ListProductAdded />,
    },
  ];

  return (
    <div>
      <div className="card-element w-full mb-4 p-2">
        <div className="block  md:flex">
          {tabProduct?.map((t, index) => (
            <div
              onClick={() => setIsActiveTab(t.id)}
              className={
                isActiveTab !== t.id
                  ? "w-full md:w-1/2 element-tab-product-active"
                  : "w-full md:w-1/2 element-tab-product"
              }
            >
              {t.icon}
              <p className="mb-0 ml-3 text-base">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
      {ListProductList?.map((l, index) => (
        <div className={isActiveTab === l.id ? "" : "hidden"}>{l.element}</div>
      ))}
    </div>
  );
}
