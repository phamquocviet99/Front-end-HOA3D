import { useState } from "react";
import "./TabHeader.css";

export default function TabHeader(props) {
  const [isActiveTab, setIsActiveTab] = useState(1);
  return (
    <div className="card-element w-full shadow-md">
      <div className=" w-full rounded-xl md:rounded-b-none block md:flex items-center pl-5 pt-1 bg-slate-50 pb-3 md:bg-transparent md:pb-0">
        {props.tabName.map((t, index) => (
          <div key={index}>
            <div
              onClick={() => setIsActiveTab(t.id)}
              className={
                isActiveTab === t.id
                  ? "element-tab-product-active md:border-b-4 md:border-blue-500 md:text-blue-500"
                  : "element-tab-product text-gray-400 border-b-4 border-transparent hover:border-b-4 hover:border-blue-400 hover:text-blue-400"
              }
            >
              {t.name}
            </div>
          </div>
        ))}
      </div>
      {props.listComponent?.map((l, index) => (
        <div className={isActiveTab === l.id ? "" : "hidden"}>{l.element}</div>
      ))}
    </div>
  );
}
