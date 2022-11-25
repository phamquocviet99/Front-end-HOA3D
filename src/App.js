import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css"
import Login from "./pages/login/Login";
import DashboardGarden from "./pages/gardens/Dashboard/DashboardGarden.jsx"

import SidebarGarden from "./components/SidebarGarden/SidebarGarden";
import ProductGarden from "./pages/gardens/Product/ProductGarden";
import QuantityGarden from "./pages/gardens/Quantity/QuantityGarden";
import OrderGarden from "./pages/gardens/Order/OrderGarden";
import TurnoverGarden from "./pages/gardens/Turnover/TurnoverGarden";
import BankGarden from "./pages/gardens/Bank/BankGarden";
import NotRegister from "./pages/login/NotRegister"
import UserGarden from "./pages/gardens/User/UserGarden";



function App() {
  const userData = JSON.parse(localStorage.getItem("userr"));
  function GardenLayout() {
    return (
      <div>
        <SidebarGarden>
          <Routes>
            <Route path="*" element={<Navigate replace to="/trang-nha-vuon" />} />
            <Route path="/trang-nha-vuon" element={<Navigate replace to="/trang-nha-vuon/trang-chu" />} />
            <Route path="/trang-nha-vuon/trang-chu" element={<DashboardGarden />} />
            <Route path="/trang-nha-vuon/san-pham" element={<ProductGarden />} />
            <Route path="/trang-nha-vuon/san-luong" element={<QuantityGarden />} />
            <Route path="/trang-nha-vuon/don-hang" element={<OrderGarden />} />
            <Route path="/trang-nha-vuon/nguoi-dung" element={<UserGarden />} />
            <Route path="/trang-nha-vuon/doanh-thu" element={<TurnoverGarden />} />
            <Route path="/trang-nha-vuon/ngan-hang" element={<BankGarden />} />
          </Routes>
        </SidebarGarden>
      </div>
    )

  }
  return (
    <div >
      <BrowserRouter>
        <Routes>  <Route path="/trang-nha-vuon/dang-nhap" element={<Login />} /></Routes>
        <GardenLayout />

      </BrowserRouter>
    </div>

    // <BrowserRouter>

    //   {userData ?
    //     (<GardenLayout />) :
    //     (<Routes>
    //       <Route path="*" element={<Navigate replace to="/not-register" />} />
    //       <Route path="/not-register" element={<NotRegister />} />
    //     </Routes>)}

    // </BrowserRouter>
  );
}

export default App;
