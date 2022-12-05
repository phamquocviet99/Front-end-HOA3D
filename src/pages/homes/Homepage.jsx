import React from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>HomePage</div>
      <div>
        <button
          onClick={() => {
            navigate("/nha-vuon");
          }}
          className="btn btn-success"
        >
          Đăng nhập nhà vườn
        </button>
      </div>
      
    </div>
  );
};

export default Homepage;
