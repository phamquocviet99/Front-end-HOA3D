import { useState } from "react";
import ButtonAddCardShip from "../../../../components/ButtonAddCardShip/ButtonAddCardShip";
import CardShip from "./CardShip";

export default function ListShip() {
  return (
    <div className="  p-4">
      <div className="flex justify-between items-center">
        <h4 className="text-zinc-500 text-xl mb-0 ml-2 font-medium">
          Danh sách chành xe vận chuyển
        </h4>
        <ButtonAddCardShip />
      </div>

      <CardShip />
      <CardShip />
    </div>
  );
}
