import { useState } from "react";

import ListCollectProduct from "./Components/ListCollectProduct";
import ListSellProduct from "./Components/ListSellProduct";

export default function Purchase() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const tabProduct = [
    {
      id: 1,

      name: "Shop hoa cần mua",
    },

    {
      id: 2,

      name: "Thu mua nhà vườn",
    },
  ];
  const ListContentProduct = [
    {
      id: 1,
      element: <ListSellProduct />,
    },
    {
      id: 2,
      element: <ListCollectProduct />,
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
