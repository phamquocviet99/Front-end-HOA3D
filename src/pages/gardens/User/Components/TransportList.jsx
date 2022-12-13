import ButtonAddCardShip from "../../../../components/ButtonAddCardShip/ButtonAddCardShip";
import CardShip from "./CardShip";

export default function TransportList() {
  return (
    <div className=" h-screen p-4">
      <div className="flex justify-between items-center">
        <h4 className="text-zinc-500 text-base md:text-xl mb-0 ml-2 font-medium">
          Danh sách chành xe
        </h4>
        <ButtonAddCardShip />
      </div>

      <div className="row">
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
