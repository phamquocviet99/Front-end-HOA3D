import { useState } from "react";
import CardProductAdded from "../../PostProduct/Components/CardProductAdded";
import CardOutOfStockProduct from "./CardOutOfStockProduct";

export default function OutOfStockProduct(){
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
        <div className="card-element p-4">
          <div className="row">
            <div className="col-md-6">
              <h4 className="text-zinc-500 text-base md:text-xl mt-1 mb-3 ml-2 font-medium">
                Danh sách sản phẩm hết hàng
              </h4>
            </div>
           
          </div>
    
          <div>
            <div className="row mt-3">
              {listProductAdmin?.map((p, index) => (
                <div className="col-md-2 mt-3">
                  <CardOutOfStockProduct />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}