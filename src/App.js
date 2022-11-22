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



function App() {
  const userData = JSON.parse(localStorage.getItem("user"));
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
