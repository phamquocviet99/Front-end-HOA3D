import { useState } from "react";
import CardProductByAdmin from "./CardProductByAdmin";

export default function ListProductByAdmin() {
  const [listProductAdmin, setListProductAdmin] = useState([
    {
      id: "1",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "2",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "1",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "2",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "3",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "4",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "5",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "6",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "7",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "8",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
  ]);
  return (
    <div className="card-element p-4">
      <h4 className="text-zinc-500 text-base md:text-xl mt-1 mb-3 ml-2 font-medium">
        Danh sách sản phẩm sàn quy định
      </h4>
      <div className="line-page"></div>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="md:flex justify-start items-center mb-3">
            <p className="text-zinc-500 text-sm md:text-base mt-1  ml-2 mb-1 mr-3">
              Bộ lọc :
            </p>
            <select
              id="countries_disabled"
              className="p-2.5 bg-gray-50 border border-gray-300 text-zinc-500t-gray-900 text-sm rounded-lg  w-full md:w-1/2"
            >
              <option selected>Danh mục hoa</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <form className="flex  justify-start md:justify-end md:mt-0 items-center">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div className="relative w-full md:w-1/2">
                <div className="absolute inset-y-0 left-0 flex  items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row overflow-y-scroll mt-3" style={{height:"800px"}}>
        {listProductAdmin?.map((p, index) => (
          <div className="col-md-3">
            <CardProductByAdmin />
          </div>
        ))}
      </div>
    </div>
  );
}
