import "./OptimiztionMatrix.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
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
    { title: "WareHouse Management", num: 21 },
    { title: "Procourement", num: 21 },
    { title: "Geospatial Analytics", num: 22 },
    { title: "Geopatial Visualization", num: 23 },
    { title: "Technology Features1", num: 24 },
    { title: "Technology Features2", num: 25 },
    { title: "Technology Features3", num: 5 },
    { title: "Technology Features3", num: 5 },
    { title: "Technology Features1", num: 5 },
  ];

  return (
    <div className="bg-purple-100 ">
      <div className="flex">
        {/* Top Left to right side Node   */}
        <div className="bg-purple-800 w-56 h-40 text-center pt-14">
          <h2 className="leading-none text-gray-500 font-bold">SIEMENS</h2>
          <h3 className="leading-none text-gray-500 font-bold">cncrgy</h3>
        </div>
        <div className="w-52 flex mt-[53px] items-center pt-[50px] flex-col space-y-0 text-sm -ml-[114px]  h-14 -rotate-90 ">
          <p className="bg-purple-950 h-8 p-[14px] flex items-center text-gray-500">
            Teachnology Features
          </p>
        </div>
        <div className="bg-slate-50 w-full h-56 lg:flex hidden relative -ml-8">
          <table className="border-collapse border border-slate-40 max-w-[500px]  absolute ">
            <thead>
              <tr>
                {items.map((item, index) => (
                  <th
                    className="border border-slate-400 h-36 border-b-green-600 border-b-4 text-center -rotate-90 whitespace-nowrap"
                    key={index}
                  >
                    <span className="text-[10px] font-normal p-0">
                      {item?.title.slice(0, 5)}
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
                    className="border border-slate-300 text-center p-2"
                    key={index}
                  >
                    <MdOutlineArrowDropDown className="text-2xl font-bold text-gray-500" />
                  </td>
                ))}
              </tr>

              {Array.from({ length: 20 }).map((_, rowIndex) => (
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
      </div>

      {/* left sidebar  */}
      <div className="h-full w-[215px] bg-slate-50 -mt-16">
        <div className="flex items-center flex-col space-y-0 text-sm">
          <p className="bg-purple-950 w-full h-8 flex items-center justify-center text-gray-500">
            Initiatives
          </p>
          {items?.slice(0, 14).map((item) => (
            <div
              className="w-full border p-1 border-gray-400 flex items-center justify-between"
              key={item.title}
            >
              <div>
                <h2 className="text-sm text-gray-500"> Mange Safety</h2>
                {/* Condition use  */}
                {item?.title?.length <= 14 ? (
                  <>
                    <p className="text-sm font-semibold">{item?.title}</p>
                  </>
                ) : (
                  <div>
                    <p className="text-sm font-semibold">
                      {item?.title.slice(0, 13) + "..."}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <button className="bg-fuchsia-200  px-4 py-1 rounded-3xl">
                  0 + 1
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptimiztionMatrix;

{
  /* <div className="w-52 flex items-center flex-col space-y-0 text-sm -ml-20  h-14 -rotate-90 ">
            <p className="bg-purple-950 h-8 p-[14px] flex items-center text-gray-500">
              Teachnology Features
            </p>
            {items?.map((item) => (
              <div
                className="w-40 border p-2 border-gray-400 flex items-center justify-center"
                key={item.title}
              >
                {item?.title?.length <= 18 ? (
                  <>
                    <p className="text-sm font-semibold">{item?.title}</p>
                  </>
                ) : (
                  <>
                    {" "}
                    <p className="text-sm font-semibold">
                      {" "}
                      {item?.title.slice(0, 16) + "..."}{" "}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div> */
}
