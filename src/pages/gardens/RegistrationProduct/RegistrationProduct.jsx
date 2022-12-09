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

      name: "Sản phẩm đã bán",
    },

    {
      id: 2,

      name: "Sản phẩm đã đăng ký",
    },
    {
      id: 3,

      name: "Sản phẩm sàn quy định",
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
    // <div>
    //   <div className="card-element w-full mb-4 p-2">
    //     <div className="block  md:flex">
    //       {tabProduct?.map((t, index) => (
    //         <div
    //           onClick={() => setIsActiveTab(t.id)}
    //           className={
    //             isActiveTab !== t.id
    //               ? "w-full md:w-1/2 element-tab-product-active"
    //               : "w-full md:w-1/2 element-tab-product"
    //           }
    //         >
    //           {t.icon}
    //           <p className="mb-0 ml-3 text-base">{t.name}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   {ListProductList?.map((l, index) => (
    //     <div className={isActiveTab === l.id ? "" : "hidden"}>{l.element}</div>
    //   ))}
    // </div>
  );
}
