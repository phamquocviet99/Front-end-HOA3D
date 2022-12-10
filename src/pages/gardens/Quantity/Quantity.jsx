import { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import HarvestProduct from "./Components/HarvestProduct";
import OnSaleProduct from "./Components/OnSaleProduct";
import OutOfStockProduct from "./Components/OutOfStockProduct";

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
    {
      id: 3,

      name: "Sản phẩm hết hàng",
    },
  ];
  const ListContentProduct = [
    {
      id: 1,
      element: <HarvestProduct/>,
    },
    {
      id: 2,
      element: <OnSaleProduct/>,
    },
    {
      id: 3,
      element: <OutOfStockProduct/>,
    },
  ];

  return (
    <div className="card-element w-full border-2  ">
      <div className=" w-full bg-header-tab rounded-xl m md:rounded-b-none block md:flex p-res-pro items-center">
        <AiFillAppstore className="hidden md:block text-2xl mx-6 text-black mt-3" />
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
