import "./App.css";

import Login from "./pages/login/Login";
import NotRegister from "./pages/login/NotRegister";
import Register from "./pages/register/Register";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import UserGarden from "./pages/gardens/User/UserGarden";
import RequireAuth from "./pages/RequireAuth";
import PersistLogin from "./pages/login/PersistLogin";
import ProductGarden from "./pages/gardens/Product/ProductGarden";
import TurnoverGarden from "./pages/gardens/Turnover/TurnoverGarden";
import Homepage from "./pages/homes/Homepage";
import SidebarGarden from "./components/SidebarGarden/SidebarGarden";
import DashboardGarden from "./pages/gardens/Dashboard/DashboardGarden";

import QuantityGarden from "./pages/gardens/Quantity/QuantityGarden";
import OrderGarden from "./pages/gardens/Order/OrderGarden";

import BankGarden from "./pages/gardens/Bank/BankGarden";

const ROLES = {
  User: 2001,
  Garden: 1984,
};

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         {/* Publick routes */}

//         <Route path="/" element={<Navigate replace to="/trang-chu" />} />
//         <Route path="/trang-chu" element={<Homepage />} />
//         <Route path="/dang-nhap" element={<Login />} />
//         <Route path="/dang-ky" element={<Register />} />
//         <Route path="/chua-dang-nhap" element={<NotRegister />} />
//         {/* Protect route */}
//         <Route element={<PersistLogin />}>
//           <Route element={<RequireAuth allowedRoles={[ROLES.Garden]} />}>

//             <Route path="/nha-vuon" element={<UserGarden />}>
//               <Route path="/nha-vuon/1" element={<ProductGarden />} />
//               <Route path="/nha-vuon/2" element={<TurnoverGarden />} />
//             </Route>
//           </Route>
//         </Route>
//       </Route>
//       {/* catch all */}
//       <Route path="*" element={<NotRegister />}></Route>
//       {/* </Route> */}
//     </Routes>
//   );
// }
function App() {
  function GardenLayout() {
    return (
      <div>
        <SidebarGarden>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="/nha-vuon/trang-chu" />}
            />
            <Route path="/nha-vuon/trang-chu" element={<DashboardGarden />} />
            <Route path="/nha-vuon/san-pham" element={<ProductGarden />} />
            <Route path="/nha-vuon/san-luong" element={<QuantityGarden />} />
            <Route path="/nha-vuon/don-hang" element={<OrderGarden />} />
            <Route path="/nha-vuon/nguoi-dung" element={<UserGarden />} />
            <Route path="/nha-vuon/doanh-thu" element={<TurnoverGarden />} />
            <Route path="/nha-vuon/ngan-hang" element={<BankGarden />} />
          </Routes>
        </SidebarGarden>
      </div>
    );
  }
  function LoginAndRegisterLayout() {
    return (
      <Routes>
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />
      </Routes>
    );
  }
  return (
    <div>
      <BrowserRouter>
      <LoginAndRegisterLayout/>
        <GardenLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
