import "./ProfileShop.css";
import { BsFilePdfFill, BsFillGrid3X2GapFill } from "react-icons/bs";
import { useState } from "react";
export default function ProfileShop() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const tabProfile = [
    {
      id: 1,
      icon: <BsFillGrid3X2GapFill className="text-xl" />,
      name: "Cơ sở",
    },

    {
      id: 2,
      icon: <BsFilePdfFill className="text-xl" />,
      name: "Quy mô",
    },
  ];
  //   const ListProductList = [
  //     {
  //       id: 1,
  //       element: <ListProductByAdmin />,
  //     },
  //     {
  //       id: 2,
  //       element: <ListProductAdded />,
  //     },
  //   ];
  return (
    <div className="card-element w-full mb-4 p-2 pt-4">
      <div className="row h-fit">
        <div className="col-md-6 ">
          <div className="flex justify-center items-center h-full">
            <div className="border-4 rounded-full p-1 border-blue-600">
              <img
                className=" rounded-full object-cover w-28 h-28"
                alt=""
                src={require("../../../assets/images/avartar/avartar.jpg")}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="flex justify-center mt-2 md:mt-0 md:justify-start items-center h-full">
            <div>
              <p className="mb-0 text-2xl font-bold">Vườn hoa Vạn Hạnh</p>
              <div className="flex justify-center md:justify-start">
                <p className=" text-base text-slate-500 mt-2">
                  Thành phố Hồ Chí Minh
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>5 sao</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="flex justify-center mt-4">
              <div className="w-28">
                <p className="text-xl font-bold mb-2 text-center">+1234</p>
                <p className="mb-0 mt-1 text-center text-slate-500">
                  Đơn hàng đã bán cho người dùng
                </p>
              </div>
              <div className="w-28 ml-4">
                <p className="text-xl font-bold mb-2 text-center">+6</p>
                <p className="mb-0 mt-1 text-center text-slate-500">
                  Năm kinh nghiệm lĩnh vực hoa
                </p>
              </div>
              <div className="w-28 ml-4">
                <p className="text-xl font-bold mb-2 text-center">+234</p>
                <p className="mb-0 mt-1 text-center text-slate-500">
                  Người dùng và nhà vườn theo dõi
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="flex justify-center md:justify-start mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold font-base py-3 px-5 border border-blue-700 rounded">
                + Theo dõi
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-5">
          <div className="flex bg-slate-200 rounded">
            {tabProfile.map((t, index) => (
              <div key={index}>
                <div
                  onClick={() => setIsActiveTab(t.id)}
                  className={
                    isActiveTab === t.id
                      ? "tab-profile-shop-active px-14 py-2"
                      : "tab-profile-shop px-14 py-2"
                  }
                >
                  {t.icon}
                  <p className="mb-0 text-base ml-3">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
