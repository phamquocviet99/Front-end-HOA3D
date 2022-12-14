import ButtonAddCardShip from "../../../../components/ButtonAddCardShip/ButtonAddCardShip";
import CardShip from "./CardShip";

export default function TransportList() {
  return (
    <div className=" h-screen   rounded-lg bg-white shadow-md">
      <div className="py-3 px-4 flex justify-between items-center">
        <p style={{ fontSize: "17px" }} className="font-bold mb-0 mr-3">
          Danh sách chành xe
        </p>
        <ButtonAddCardShip />
      </div>
      <div className="line-y " />

      <div className="row p-4">
        <div className="col-md-6">
          <CardShip />
        </div>
        <div className="col-md-6">
          <CardShip />
        </div>
      </div>
    </div>
  );
}
