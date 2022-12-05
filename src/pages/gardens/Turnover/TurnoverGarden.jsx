import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useLogout from "../../../hooks/useLogout";

const TurnoverGarden = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useLogout();
  const Logout = async () => {
    await logout();
    navigate("/dang-nhap-nha-vuon");
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="bg-element h-screen rounded-3xl">
          nhà vườn
          <button onClick={Logout} className="btn btn-success">
            dang xua
          </button>
        </div>
      </div>
    </div>
  );
};

export default TurnoverGarden;
