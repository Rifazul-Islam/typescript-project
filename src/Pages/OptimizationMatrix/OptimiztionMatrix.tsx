import { useState } from "react";
import "./OptimiztionMatrix.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosArrowForward, IoMdArrowDropup } from "react-icons/io";
const OptimiztionMatrix = () => {
  const items: { title: string; num: number }[] = [
    { title: "Incident Management", num: 1 },
    { title: "Alarm Managements", num: 2 },
    { title: "System Visualization", num: 3 },
    { title: "Actuator Control", num: 4 },
    { title: "Realtime Analytics", num: 5 },
    { title: "Predictive Analysis", num: 6 },
    { title: "Operational Data Management", num: 7 },
    { title: "External Data Exchels", num: 5 },
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
    { title: "Procourement", num: 21 },
    { title: "Geospatial Analytics", num: 22 },
    { title: "Geopatial Visualization", num: 23 },
    { title: "Technology Features1", num: 24 },
    { title: "Technology Features2", num: 25 },
    { title: "Technology Features3", num: 26 },
    { title: "Technology Features3", num: 27 },
    { title: "Technology Features1", num: 28 },
    { title: "Ticketing System", num: 29 },
  ];
  const [isOpen, setIsOpen] = useState(false);

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
          <table className="border-collapse border border-slate-40   absolute ">
            <thead>
              <tr>
                {items.map((item, index) => (
                  <th
                    className="border border-slate-400 h-36 border-b-green-600 border-b-4 vertical-text whitespace-nowrap"
                    key={index}
                  >
                    <span className="text-[14px] font-normal">
                      {item?.title.length < 16 ? (
                        <> {item?.title}</>
                      ) : (
                        <> {item?.title.slice(0, 16) + "..."}</>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                {items.map((item, index) => (
                  <td
                    className="border border-slate-300 text-center p-2 font-bold"
                    key={index}
                  >
                    {item?.num}
                  </td>
                ))}
              </tr>
              <tr>
                {items.map((item, index) => (
                  <td
                    onClick={() => setIsOpen(!isOpen)}
                    className="border border-slate-300 text-center p-[3px] cursor-pointer"
                    key={index}
                  >
                    {isOpen ? (
                      <>
                        <IoMdArrowDropup className="text-2xl font-bold text-gray-500" />
                      </>
                    ) : (
                      <>
                        <MdOutlineArrowDropDown className="text-2xl font-bold text-gray-500" />
                      </>
                    )}
                  </td>
                ))}
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
        <div className="z-20">
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
