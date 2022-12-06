import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import useLogout from "../../../hooks/useLogout";


const OrderGarden = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useLogout();


  const Logout = async () => {
    await logout();
    navigate("/dang-nhap");
  };

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();
  //   const getUsers = async () => {
  //     try {
  //       const response = await axiosPrivate.get("/employees", {
  //         signal: controller.signal,
  //       });
  //       console.log(response.data);
  //       isMounted && setUsers(response.data);
  //     } catch (error) {
  //       console.log(error);
  //       navigate("/dang-nhap", { state: { from: location }, replace: true });
  //     }
  //   };
  //   getUsers();
  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, []);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="bg-element h-screen rounded-3xl">
        <button className="btn btn-success" onClick={()=>logout()}>
        logout
      </button>
        </div>
      </div>
     
    </div>
  );
};

export default OrderGarden;
