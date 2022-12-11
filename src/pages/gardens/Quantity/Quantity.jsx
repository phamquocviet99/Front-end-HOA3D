import { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import HarvestProduct from "./Components/HarvestProduct";
import OnSaleProduct from "./Components/OnSaleProduct";

export default function Quantity() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const tabProduct = [
    {
      id: 1,

      name: "Sản phẩm sắp thu hoạch",
    },

    {
      id: 2,

      name: "Sản phẩm đang bán",
    },
  ];
  const ListContentProduct = [
    {
      id: 1,
      element: <HarvestProduct />,
    },
    {
      id: 2,
      element: <OnSaleProduct />,
    },
  ];

  return (
    <div className="card-element w-full border-2  ">
      <div className=" w-full rounded-xl md:rounded-b-none block md:flex items-center pl-5">
        {tabProduct.map((t, index) => (
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
      {ListContentProduct?.map((l, index) => (
        <div className={isActiveTab === l.id ? "" : "hidden"}>{l.element}</div>
      ))}
    </div>
  );
}
