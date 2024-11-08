import { useState } from "react";
import "./OptimiztionMatrix.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  IoIosArrowForward,
  IoIosCloseCircleOutline,
  IoMdArrowDropup,
} from "react-icons/io";

const OptimiztionMatrix = () => {
  const items: { title: string; num: number }[] = [
    { title: "Incident Management", num: 1 },
    { title: "Alarm Managements", num: 2 },
    { title: "System Visualization", num: 3 },
    { title: "Actuator Control", num: 4 },
    { title: "Realtime Analytics", num: 5 },
    { title: "Predictive Analysis", num: 6 },
    { title: "Operational Data Management", num: 7 },
    { title: "Segment Operatons", num: 8 },
    { title: "Operational Schements", num: 9 },
    { title: "Control (tralnsmissions)", num: 10 },
    { title: "Alarms and Events Ments", num: 11 },
    { title: " Status (transsmission)", num: 12 },
    { title: "Custormer Informations", num: 13 },
    { title: "Bill Managemnts", num: 14 },
    { title: "Reporting (CIS)", num: 15 },
    { title: "Self-Services Center", num: 16 },
    { title: "Ticketing System", num: 17 },
    { title: "Accounting", num: 18 },
    { title: "Controlling", num: 19 },
    { title: "Strategic Eenterprisements", num: 20 },
    { title: "WareHouse", num: 21 },
    { title: "Geospatial Analytics", num: 22 },
    { title: "Geopatial Visualization", num: 23 },
    { title: "Technology Features1", num: 24 },
    { title: "Technology Features2", num: 25 },
    { title: "Technology Features3", num: 26 },
    { title: "Technology Features3", num: 27 },
    { title: "Technology Features1", num: 28 },
    { title: "Ticketing System", num: 29 },
    { title: "Technology Features3", num: 30 },
    { title: "Technology Features1", num: 31 },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndexs, setOpenIndexs] = useState<number | null>(null);

  // th use
  const handleCellClick = (index: number) => {
    // Toggle the specific cell when clicked
    setOpenIndex(openIndex === index ? null : index);
  };

  // tr use
  const handleCellClicks = (index: number) => {
    // Toggle the specific cell when clicked
    setOpenIndexs(openIndexs === index ? null : index);
  };

  const [numberStore, setNumberStore] = useState<number | null>(null);

  return (
    <div className="bg-purple-100 relative">
      <div className="flex relative">
        {/* Top Left to right side Node   */}
        <div className="bg-purple-800 w-full lg:w-72 h-48  text-center pt-14 flex items-center justify-center">
          <div>
            <h2 className="leading-none text-gray-500 font-bold">SIEMENS</h2>
            <h3 className="leading-none text-gray-500 font-bold">cncrgy</h3>
          </div>
        </div>
        <div className="w-52 hidden  lg:flex mt-[77px] items-center pt-[38px] flex-col space-y-0 text-sm -ml-[125px]  h-14 -rotate-90 ">
          <p className="bg-purple-950  text-[13px] z-10 h-8 w-52  p-[14px] flex justify-end items-center text-gray-500">
            Teachnology Features
          </p>
        </div>

        <div className="bg-slate-50 w-full h-56 lg:flex hidden relative -ml-[63px]">
          <table className="border-collapse border border-slate-40 absolute ">
            <thead>
              <tr>
                {items.map((item, index) => (
                  <th
                    onClick={() => handleCellClicks(item?.num)}
                    className={`border border-slate-400 ${
                      openIndexs === item?.num &&
                      "border-b-4 border-b-green-700"
                    } relative cursor-pointer h-36 border-b-green-300 border-b-4 vertical-text whitespace-nowrap`}
                    key={index}
                  >
                    {openIndexs === item?.num ? (
                      <>
                        <span className="text-[14px] font-normal">
                          {item?.title.length < 16 ? (
                            <h2 className="text-green-600"> {item?.title}</h2>
                          ) : (
                            <h2 className="text-green-600">
                              {item?.title.slice(0, 16) + "..."}
                            </h2>
                          )}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[14px] font-normal">
                          {item?.title.length < 16 ? (
                            <h2> {item?.title}</h2>
                          ) : (
                            <h2> {item?.title.slice(0, 16) + "..."}</h2>
                          )}
                        </span>
                      </>
                    )}

                    {/* this is Modal design  */}
                    {openIndexs === item?.num && (
                      <div
                        className={`absolute  ${
                          openIndexs === 28 ||
                          openIndexs === 29 ||
                          openIndexs === 30 ||
                          openIndexs === 31
                            ? "left-20"
                            : ""
                        }   border w-36 h-[293px] ${
                          openIndexs === 1 ||
                          openIndexs === 2 ||
                          openIndexs === 3 ||
                          openIndexs === 4 ||
                          openIndexs === 5
                            ? "-left-48"
                            : ""
                        }  bg-[#fff] rotate-90 -top-[227px] -left-14  border-green-400 shadow-xl -z-50 `}
                      >
                        <span className="text-[28px] absolute text-red-700  flex items-center justify-end h-full mt-1 -mr-1.5 shadow-2xl">
                          <IoIosCloseCircleOutline />
                        </span>
                        <h2 className="pr-8 text-lg font-semibold p-4">
                          {item.title}
                        </h2>
                        <div className="border-r-[0.5px] mr-4 flex justify-between p-4">
                          <p>Custom</p> <p>Data</p>
                        </div>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                {items.map((item, index) => (
                  <td
                    className="border border-slate-300  text-center p-2 font-bold"
                    key={index}
                  >
                    {item?.num}
                  </td>
                ))}
              </tr>
              {/* select option */}
              <tr>
                {items.map((item) => (
                  <td
                    onClick={() => handleCellClick(item?.num)}
                    className="border border-slate-300 text-center p-[3px] cursor-pointer"
                    key={item.num}
                  >
                    {openIndex === item?.num ? (
                      <div className="relative flex items-center justify-center">
                        <div className="absolute -top-4 bg-slate-100 border border-purple-700 w-9 text-black text-center">
                          {/* Close button */}

                          {numberStore ? (
                            <p className="text-lg mx-auto font-bold text-gray-200 bg-purple-800 w-full">
                              {numberStore}
                            </p>
                          ) : (
                            <IoMdArrowDropup className="text-2xl mx-auto font-bold text-gray-200 bg-purple-800 w-full" />
                          )}
                          {Array.from({ length: 7 }).map((_, index) => (
                            <p
                              key={index}
                              onClick={() => setNumberStore(index + 1)}
                            >
                              {index + 1}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <MdOutlineArrowDropDown className="text-2xl font-bold text-gray-500" />
                    )}
                  </td>
                ))}
                {}
              </tr>

              {Array.from({ length: 28 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {items.map((item, index) => (
                    <td
                      className="border border-slate-300 text-center p-4"
                      key={index}
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="bg-black lg:flex hidden font-bold text-white absolute top-[153px] left-[224px] p-1 ">
          UT
        </p>
      </div>

      {/* left sidebar  */}
      <div className="h-full  w-[254px] bg-slate-50 -mt-[39px] hidden lg:flex">
        <div className="z-0">
          <table className="border-collapse border  border-slate-400">
            <thead>
              <tr className="bg-purple-900 h-8 ">
                <th className="border border-purple-800 text-gray-400">
                  Initiatives
                </th>
                <th className="border border-slate-800 text-white w-8 bg-black">
                  BV
                </th>
                <th className="border text-white border-slate-800 w-8 bg-purple-500">
                  VP
                </th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => (
                <tr key={index}>
                  <td className="border-[1px]  flex items-center p-0.5 justify-between ">
                    <p className="flex flex-col">
                      <span className="leading-none text-[11px] text-gray-700">
                        Manage Safety
                      </span>
                      <span className="leading-none text-sm ">
                        {item?.title.length < 14 ? (
                          <>{item?.title}</>
                        ) : (
                          <>{item?.title.slice(0, 16) + "..."}</>
                        )}
                      </span>
                    </p>

                    <span className="bg-fuchsia-200  rounded-3xl flex items-center justify-between px-2">
                      0
                      <IoIosArrowForward className="text-fuchsia-500 " />1
                    </span>
                  </td>
                  <td className="border border-slate-300 border-l-4 border-l-yellow-400 text-center font-bold">
                    {item?.num}
                  </td>
                  <td className="border border-slate-300 text-center text-xl font-bold">
                    <MdOutlineArrowDropDown />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OptimiztionMatrix;
