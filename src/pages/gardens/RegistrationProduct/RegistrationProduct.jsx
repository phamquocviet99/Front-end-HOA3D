import ListProductByAdmin from "./Components/ListProductByAdmin";
import ListProductAdded from "./Components/ListProductAdded";
import ListProductOnSale from "./Components/ListProductOnSale";
import TabHeader from "../../../components/TabHeader/TabHeader";

export default function RegistrationProduct() {
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
      element: <ListProductOnSale />,
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
    <div>
      <div className="pb-3 flex justify-between items-center px-2">
        <p style={{ fontSize: "20px" }} className="font-bold mb-0 mr-3">
          Quản lý sản phẩm
        </p>
      </div>
      <div className="line-y mx-2" />
      <TabHeader tabName={tabProduct} listComponent={ListContentProduct} />
    </div>
  );

  // return <TabHeader tabName={tabProduct} listComponent={ListContentProduct} />;
}
