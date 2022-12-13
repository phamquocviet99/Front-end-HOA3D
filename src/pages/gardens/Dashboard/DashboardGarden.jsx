import React from "react";

const DashboardGarden = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-3 mt-2">
          <div className="p-4  w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-around items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <i className="fa-solid fa-table-list text-orange-500 text-4xl"></i>
              </div>
              <div>
                <p className="mb-0 text-base text-gray-500">Tổng đơn hàng</p>
                <div className="flex justify-start items-center mt-1">
                  <p className="mb-0 text-xl font-bold text-orange-500 mr-2">
                    +2304
                  </p>
                  <p className="mb-0 text-base text-green-600">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4  w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-around items-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <i className="fa-solid fa-file-circle-plus text-indigo-500 text-4xl"></i>
              </div>
              <div>
                <p className="mb-0 text-base text-gray-500">Đơn hàng mới</p>
                <div className="flex justify-start items-center mt-1">
                  <p className="mb-0 text-xl font-bold text-indigo-500 mr-2">
                    +2304
                  </p>

                  <p className="mb-0 text-base text-green-600">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4  w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-around items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <i className="text-blue-500 text-4xl fa-solid fa-truck-fast"></i>
              </div>
              <div>
                <p className="mb-0 text-base text-gray-500">Đơn đang giao</p>
                <div className="flex justify-start items-center mt-1">
                  <p className="mb-0 text-xl font-bold text-blue-500 mr-2">
                    +2304
                  </p>
                  <p className="mb-0 text-base text-green-600">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4  w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-around items-center">
              <div className="p-3 bg-rose-100 rounded-lg">
                <i className="fa-solid fa-building-circle-check text-rose-500 text-4xl"></i>
              </div>
              <div>
                <p className="mb-0 text-base text-gray-500">Đơn hoàn thành</p>
                <div className="flex justify-start items-center mt-1">
                  <p className="mb-0 text-xl font-bold text-rose-500 mr-2">
                    +2304
                  </p>
                  <p className="mb-0 text-base text-green-600">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGarden;
