import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css"
import Login from "./pages/login/Login";
import DashboardGarden from "./pages/gardens/Dashboard/DashboardGarden.jsx"

import SidebarGarden from "./components/SidebarGarden/SidebarGarden";
import ProductGarden from "./pages/gardens/Product/ProductGarden";
import QuantityGarden from "./pages/gardens/Quantity/QuantityGarden";
import OrderGardent from "./pages/gardens/Order/OrderGardent";
import TurnoverGarden from "./pages/gardens/Turnover/TurnoverGarden";
import BankGarden from "./pages/gardens/Bank/BankGarden";



function App() {

  function GardenLayout() {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      return (
        <div>
          <SidebarGarden>
            <Routes>
              <Route path="/trang-nha-vuon" element={<Navigate replace to="/trang-nha-vuon/trang-chu" />} />
              <Route path="/trang-nha-vuon/trang-chu" element={<DashboardGarden />} />
              <Route path="/trang-nha-vuon/san-pham" element={<ProductGarden />} />
              <Route path="/trang-nha-vuon/san-luong" element={<QuantityGarden />} />
              <Route path="/trang-nha-vuon/don-hang" element={<OrderGardent />} />
              <Route path="/trang-nha-vuon/doanh-thu" element={<TurnoverGarden />} />
              <Route path="/trang-nha-vuon/ngan-hang" element={<BankGarden />} />
              <Route path="*" element={<>Not</>} />

            </Routes>
          </SidebarGarden>
        </div>
      )
    } else {
      return (<DashboardGarden />)

    }

  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <GardenLayout />

    </BrowserRouter>
  );
}

export default App;
