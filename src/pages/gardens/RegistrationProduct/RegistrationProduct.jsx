import { useState } from "react";
import CardProduct from "./Components/CardProduct";
import ListProductByAdmin from "./Components/ListProductByAdmin";

export default function RegistrationProduct() {
  const [listProductAdmin, setListProductAdmin] = useState([
    {
      id: "1",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "2",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "3",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "4",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "5",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "6",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "7",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "8",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "7",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "8",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
  ]);
  return (
    <div>
      <ListProductByAdmin />
      <div className="card-element p-4 mt-4">
        <h4 className="text-zinc-500 text-base md:text-xl mt-1 mb-3 ml-2 font-medium">
          Danh sách sản phẩm đã đăng ký
        </h4>

        <div>
          <div className="row overflow-y-scroll">

            {listProductAdmin?.map((p, index) => (
              <div className="col-md-3 col-sm-4 col-xs-12 mt-3">
                <CardProduct />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
