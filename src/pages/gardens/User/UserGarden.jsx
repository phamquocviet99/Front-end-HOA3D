import React, { Children } from "react";
import "./index.css";
import { BiMessageSquareCheck } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { TbPoint } from "react-icons/tb";
import ChangePasswordComponent from "./Components/ChangePasswordComponent";
import CardPaymentComponent from "./Components/CardPaymentComponent";
import EditUserComponent from "./Components/EditUserComponent";
import ProfileUserComponent from "./Components/ProfileUserComponent";

export default function UserGarden() {

  return (
    // <div className="bg-page rounded-3xl px-5 pt-10 pb-10">
    <div className="bg-page rounded-3xl ">
      <div className="row">
        <div className="col-md-4">
          <ProfileUserComponent/>
          <div className="card-user-inf mt-4 p-4 mb-4">
            <div className="flex justify-between">
              <div className="bg-orange-200 flex justify-center items-center rounded p-2">
                <p className="m-0 text-orange-500">Standard</p>
              </div>
            </div>
            <div className="flex mt-4 justify-start items-center text-zinc-500">
              <TbPoint className="text-3xl" />
              <p className="m-0  text-xl">10 Users</p>
            </div>
            <div className="flex mt-2 justify-start items-center text-zinc-500">
              <TbPoint className="text-3xl" />
              <p className="m-0  text-xl">Up to 10GB storage</p>
            </div>
            <div className="flex mt-2 justify-start items-center text-zinc-500">
              <TbPoint className="text-3xl" />
              <p className="m-0  text-xl">Up to 10GB storage</p>
            </div>
            <div className="flex mt-2 justify-start items-center text-zinc-500">
              <TbPoint className="text-3xl" />
              <p className="m-0  text-xl">Basic Support</p>
            </div>

            <div className="flex justify-between mt-3 text-zinc-600">
              <p className="m-0 text-lg">Days</p>
              <p className="m-0 text-lg">26 of 30 Days</p>
            </div>
            <div className="bg-orange-100 w-full h-2 rounded mt-2">
              <div className="bg-orange-400 w-3/4 h-2 rounded"></div>
            </div>
            <p className="m-0 text-sm text-zinc-400 mt-2">4 days remaining</p>
            <button class=" mt-4 mb-4 bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded w-full">
              Upgrade Plan
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <EditUserComponent/>
          <ChangePasswordComponent />
          <CardPaymentComponent/>
          
        </div>
      </div>
    </div>
  );
}
