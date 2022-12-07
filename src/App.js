import "./App.css";

import Login from "./pages/login/Login";
import NotRegister from "./pages/login/NotRegister";
import Register from "./pages/register/Register";
import { Routes, Route, Navigate } from "react-router-dom";

import UserGarden from "./pages/gardens/User/UserGarden";

import ProductGarden from "./pages/gardens/Product/ProductGarden";

import SidebarGarden from "./components/SidebarGarden/SidebarGarden";
import DashboardGarden from "./pages/gardens/Dashboard/DashboardGarden";

import RegistrationProduct from "./pages/gardens/RegistrationProduct/RegistrationProduct";
import PostProduct from "./pages/gardens/PostProduct/PostProduct";

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
            <Route
              path="/nha-vuon/dang-ky-san-pham"
              element={<RegistrationProduct />}
            />{" "}
            <Route path="/nha-vuon/dang-ban" element={<PostProduct />} />
            <Route path="/nha-vuon/nguoi-dung" element={<UserGarden />} />
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
      <LoginAndRegisterLayout />
      <GardenLayout />
    </div>
  );
}

export default App;
