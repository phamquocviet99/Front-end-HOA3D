import ButtonAddCardShip from "../../../../components/ButtonAddCardShip/ButtonAddCardShip";
import CardShip from "./CardShip";

export default function TransportList() {
  return (
    <div className=" h-screen   rounded-lg bg-white shadow-md">
      <div className="py-3 px-4 flex justify-between items-center">
        <p style={{ fontSize: "20px" }} className="font-bold mb-0 mr-3">
          Danh sách chành xe
        </p>
        <ButtonAddCardShip />
      </div>
      <div className="line-y " />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 p-3">
        <CardShip />

        <CardShip />
      </div>
    </div>
  );
}
