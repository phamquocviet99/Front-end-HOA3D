
import TabHeader from "../../../components/TabHeader/TabHeader";
import HarvestProduct from "./Components/HarvestProduct";
import OnSaleProduct from "./Components/OnSaleProduct";

export default function Quantity() {
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

  return <TabHeader tabName={tabProduct} listComponent={ListContentProduct} />;
}
