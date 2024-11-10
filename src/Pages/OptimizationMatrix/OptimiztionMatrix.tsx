import { useEffect, useRef, useState } from "react";
import "./OptimiztionMatrix.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  IoIosArrowForward,
  IoIosCloseCircleOutline,
  IoMdArrowDropup,
} from "react-icons/io";

const OptimiztionMatrix = () => {
  // This A array Object
  const [items, setItems] = useState<
    { title: string; num: number; id: number; value: number }[]
  >([
    { title: "Incident Management", num: 1, id: 1, value: 0 },
    { title: "Managements", num: 2, id: 2, value: 0 },
    { title: "System Visualization", num: 3, id: 3, value: 0 },
    { title: "Actuator Control", num: 4, id: 4, value: 0 },
    { title: "Realtime Analytics", num: 5, id: 5, value: 0 },
    { title: "Predictive Analysis", num: 6, id: 6, value: 0 },
    { title: "Operational Data Management", num: 7, id: 7, value: 0 },
    { title: "Segment Operatons", num: 8, id: 8, value: 0 },
    { title: "Operational Schements", num: 9, id: 9, value: 0 },
    { title: "Control (tralnsmissions)", num: 10, id: 10, value: 0 },
    { title: "Alarms and Events Ments", num: 11, id: 11, value: 0 },
    { title: "Status (transsmission)", num: 12, id: 12, value: 0 },
    { title: "Custormer Informations", num: 13, id: 13, value: 0 },
    { title: "Bill Managemnts", num: 14, id: 14, value: 0 },
    { title: "Reporting (CIS)", num: 15, id: 15, value: 0 },
    { title: "Self-Services Center", num: 16, id: 16, value: 0 },
    { title: "Ticketing System", num: 17, id: 17, value: 0 },
    { title: "Accounting", num: 18, id: 18, value: 0 },
    { title: "Controlling", num: 19, id: 19, value: 0 },
    { title: "Strategic Eenterprisements", num: 20, id: 20, value: 0 },
    { title: "WareHouse", num: 21, id: 21, value: 0 },
    { title: "Geospatial Analytics", num: 22, id: 22, value: 0 },
    { title: "Geopatial Visualization", num: 23, id: 23, value: 0 },
    { title: "Technology Features1", num: 24, id: 24, value: 0 },
    { title: "Technology Features2", num: 25, id: 25, value: 0 },
    { title: "Technology Features3", num: 26, id: 26, value: 0 },
    { title: "Technology Features3", num: 27, id: 27, value: 0 },
    { title: "Technology Features1", num: 28, id: 28, value: 0 },
    { title: "Ticketing System", num: 29, id: 29, value: 0 },
    { title: "Technology Features3", num: 30, id: 30, value: 0 },
    { title: "Technology Features1", num: 31, id: 31, value: 0 },
  ]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // value update Function this porpuse
  const updateValue = (id: number, newValue: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );

    setOpenIndex(openIndex === id ? null : id);
  };

  // For Top Side use This Sistem

  const [openIndexs, setOpenIndexs] = useState<number | null>(null);
  const [numberStore, setNumberStore] = useState<number | null>(null);

  //  Toggle the specific cell when clicked // table head th for use this function
  // const handleCellClick = (index: number) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  // tr use roated Number PerPuse This Function
  const handleCellClicks = (index: number) => {
    setOpenIndexs(openIndexs === index ? null : index);
  };

  // =================== Left Side ================

  const [openIndexLeft, setOpenIndexLeft] = useState<number | null>(null);
  const [openIndexLefts, setOpenIndexLefts] = useState<number | null>(null);

  // td use for
  const handleCellClickLeft = (index: number) => {
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  };

  // td use for
  const handleCellClickLefts = (index: number) => {
    setOpenIndexLefts(openIndexLefts === index ? null : index);
  };

  // model opening and close porpuse state use
  // const [openModalLeft, setOpenModelLeft] = useState(false);

  // Modle close porpuse use
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenIndexLefts(null);
        setOpenIndexs(null);
      }
    }

    // Add event listener if either `openIndexLefts` or `numberStore` is set
    if (openIndexLefts !== null || openIndexs !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIndexLefts, openIndexs, setOpenIndexLefts, setOpenIndexs]);
  return (
    <div className="bg-purple-100 relative">
      <div className="flex relative">
        {/*  SIEMENS Top Left to right side  */}
        <div className="bg-purple-800 w-full lg:w-72 h-48  text-center  flex items-center justify-center">
          <div>
            <h2 className="leading-none text-gray-400 font-bold text-xl">
              SIEMENS
            </h2>
            <h3 className="leading-none text-gray-500 font-bold text-xl">
              cncrgy
            </h3>
          </div>
        </div>

        {/* different th porpuse this div use */}
        <div className="w-52 hidden  lg:flex mt-[77px] items-center pt-[38px] flex-col space-y-0 text-sm -ml-[125px]  h-14 -rotate-90 ">
          <p className="bg-purple-950  text-[13px] z-10 h-8 w-52  p-[14px] flex justify-end items-center text-gray-500">
            Teachnology Features
          </p>
        </div>

        {/* Main Table th porpuse this div use */}
        <div className="bg-slate-50 w-full h-[219px] lg:flex hidden relative -ml-[63px]">
          <table className="border-collapse border border-slate-40 absolute ">
            <thead>
              <tr>
                {items.map((item, index) => (
                  <th
                    onClick={() => {
                      handleCellClicks(item?.num);
                    }}
                    className={`border border-slate-400 ${
                      openIndexs === item?.num &&
                      "border-b-4 border-b-green-700"
                    } relative cursor-pointer h-36 border-b-green-300 border-b-4 vertical-text whitespace-nowrap`}
                    key={index}
                  >
                    {/* this condion use  specific number qual  */}
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
                        ref={modalRef}
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
                        }  bg-[#fff] rotate-90 -top-[227px] -left-14  border-green-400  -z-50 `}
                      >
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
              {/* // Mapping this Number show porpuse */}
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
                    onClick={() => updateValue(item.id, item.value + 0)} // Increment value by 1 when clicked
                    className="border border-slate-300 text-center p-[3px] cursor-pointer"
                    key={item.num}
                  >
                    {openIndex === item.num ? (
                      <div className="relative flex items-center justify-center">
                        <div className="absolute -top-4 bg-slate-100 border border-purple-700 w-9 text-black text-center">
                          {/* Display the value or icon conditionally */}
                          {item.value === 0 ? (
                            <IoMdArrowDropup className="text-2xl mx-auto font-bold text-gray-200 bg-purple-800 w-full" />
                          ) : (
                            <p className="text-lg mx-auto font-bold bg-purple-800 text-white w-full">
                              {item.value}
                            </p>
                          )}

                          {/* Dropdown list */}
                          {Array.from({ length: 8 }).map((_, index) => (
                            <p
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation(); // Prevents triggering the parent onClick
                                setNumberStore(index);
                                updateValue(item.id, index); // Update the item value with the selected index
                              }}
                              className={
                                numberStore === index
                                  ? "bg-purple-200"
                                  : "border border-gray-400"
                              }
                            >
                              {index}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : item.value === 0 ? (
                      // Display the arrow icon if the value is 0 and dropdown is not open
                      <MdOutlineArrowDropDown className="text-2xl font-bold text-gray-500" />
                    ) : (
                      // Display the value if it's greater than 0
                      <p className="text-lg font-bold">{item.value}</p>
                    )}
                  </td>
                ))}
              </tr>

              {/* Emty table row and column use this array like object */}
              {Array.from({ length: 36 }).map((_, rowIndex) => (
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

        {/* It is Position porpuse use */}
        <p className="bg-black lg:flex hidden font-bold text-white absolute top-[146px] left-[224px] p-1 ">
          UT
        </p>
      </div>

      {/* left sidebar  */}
      <div className="h-full w-[254px] bg-slate-50 -mt-[39px] hidden lg:flex">
        <div className="z-10">
          {/* This Table Part */}
          <table className="border-collapse border  border-slate-400">
            <thead>
              <tr className="bg-purple-900 h-8">
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
                  {/* left side Title show  */}
                  <td
                    onClick={() => {
                      handleCellClickLefts(item?.num);
                    }}
                    className={`border border-r-4 border-r-yellow-300 border-slate-300  ${
                      openIndexLefts === item?.num &&
                      "border-r-4 border-r-yellow-600 bg-yellow-100"
                    } relative cursor-pointer pt-1 flex justify-between items-center`}
                    key={index}
                  >
                    {/* Left side  title Show */}
                    <span className="text-[14px] font-normal -mt-2 py-0.5">
                      <span className=" text-gray-700">Manage Safety</span>
                      {item?.title.length < 14 ? (
                        <h2 className="leading-none"> {item?.title}</h2>
                      ) : (
                        <h2 className="leading-none">
                          {item?.title.slice(0, 15) + "..."}
                        </h2>
                      )}
                    </span>
                    {/* this dive right side button Show */}
                    <span className="bg-fuchsia-200  rounded-3xl flex items-center justify-between px-4 h-7 ">
                      0
                      <IoIosArrowForward />1
                    </span>

                    {/* this is Modal design  */}

                    {openIndexLefts === item?.num && (
                      <div
                        ref={modalRef}
                        className={`absolute  ${
                          openIndexLefts === 28 ||
                          openIndexLefts === 29 ||
                          openIndexLefts === 30 ||
                          openIndexLefts === 31
                            ? "left-20"
                            : ""
                        }   border w-60   bg-[#fff] left-48  border-yellow-400`}
                      >
                        <span className="text-[28px] absolute text-red-700 pl-[210px]  h-full  shadow-2xl">
                          <IoIosCloseCircleOutline />
                        </span>

                        <div className="pr-8 text-lg font-semibold p-4">
                          <p className="text-sm font-normal">Manage Safety</p>
                          <h2> {item.title}</h2>
                        </div>
                        <div className="border-r-[0.5px] mr-4 flex justify-between p-4">
                          <p>Custom</p> <p>Data</p>
                        </div>
                      </div>
                    )}
                  </td>

                  {/* Number Show porpuse use */}
                  <td className="border border-slate-300 text-center font-bold">
                    {item?.num}
                  </td>

                  {/* left side Option */}
                  <td
                    onClick={() => handleCellClickLeft(item?.num)}
                    className="border border-slate-300 text-center p-[3px] cursor-pointer"
                    key={item.num}
                  >
                    {openIndexLeft === item?.num ? (
                      <div className="relative border-4 border-red-800  flex items-center justify-center">
                        <div
                          className={`absolute  ${
                            openIndexLeft === 25 ||
                            openIndexLeft === 26 ||
                            openIndexLeft === 27 ||
                            openIndexLeft === 28 ||
                            openIndexLeft === 29 ||
                            openIndexLeft === 30 ||
                            openIndexLeft === 31
                              ? " left-[70px] -rotate-90"
                              : "-top-4"
                          } bg-slate-100 border border-purple-700 w-9 text-black text-center`}
                        >
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
                              {numberStore === index + 1 ? (
                                <p className="bg-purple-200"> {index + 1}</p>
                              ) : (
                                <p className="border border-gray-400">
                                  {index + 1}
                                </p>
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <MdOutlineArrowDropDown className="text-2xl font-bold text-gray-500" />
                    )}
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
