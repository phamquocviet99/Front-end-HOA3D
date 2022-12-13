import React, { Children } from "react";
import "./index.css";
import { BiMessageSquareCheck } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { TbPoint } from "react-icons/tb";
import ChangePasswordComponent from "./Components/ChangePasswordComponent";
import CardPaymentComponent from "./Components/CardPaymentComponent";
import EditUserComponent from "./Components/EditUserComponent";
import ProfileUserComponent from "./Components/ProfileUserComponent";
import TabHeader from "../../../components/TabHeader/TabHeader";
import ListShip from "./Components/ListShip";
import ProfileUser from "./Components/ProfileUser";
import EditProfileUser from "./Components/EditProfileUser";
import TransportList from "./Components/TransportList";

export default function UserGarden() {
  const tabName = [
    {
      id: 1,

      name: "Trang cá nhân",
    },

    {
      id: 2,

      name: "Cập nhật thông tin",
    },
    {
      id: 3,

      name: "Thanh toán",
    },
    {
      id: 4,

      name: "Vận chuyển",
    },
  ];
  const listComponent = [
    {
      id: 1,
      element: <ProfileUser />,
    },
    {
      id: 2,
      element: <EditProfileUser />,
    },
    {
      id: 3,
      element: <CardPaymentComponent />,
    },
    {
      id: 4,
      element: <TransportList />,
    },
  ];

  return <TabHeader tabName={tabName} listComponent={listComponent} />;
}
