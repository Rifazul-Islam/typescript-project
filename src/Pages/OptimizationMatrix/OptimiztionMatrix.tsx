const OptimiztionMatrix = () => {
  const items: { title: string }[] = [
    { title: "Incident Management" },
    { title: "Alarm Managements" },
    { title: "System Visualization" },
    { title: "Actuator Control" },
    { title: "Realtime Analytics" },
    { title: "Predictive Analysis" },
    { title: "Operational Data Management" },
    { title: "External Data Exchels" },
    { title: "Segment Operatons" },
    { title: "Operational Schements" },
    { title: "Control (tralnsmissions)" },
    { title: "Alarms and Events Ments" },
    { title: " Status (transsmission)" },
    { title: "Custormer Informations" },
    { title: "Bill Managemnts" },
    { title: "Reporting (CIS)" },
    { title: "Self-Services Center" },
    { title: "Ticketing System" },
    { title: "Accounting" },
    { title: "Controlling" },
    { title: "Strategic Eenterprisements" },
    { title: "WareHouse Management" },
    { title: "Procourement" },
    { title: "Geospatial Analytics" },
    { title: "Geopatial Visualization" },
    { title: "Technology Features1" },
    { title: "Technology Features2" },
    { title: "Technology Features3" },
    { title: "Technology Features3" },
    { title: "Technology Features1" },
  ];

  return (
    <div className="bg-purple-100 ">
      <div className="flex">
        {/* Top Left to right side   */}
        <div className="bg-purple-800 w-52 h-40 text-center pt-14">
          <h2 className="leading-none text-gray-500 font-bold">SIEMENS</h2>
          <h3 className="leading-none text-gray-500 font-bold">cncrgy</h3>
        </div>
        <div className="bg-slate-50 w-full pt-[52px] lg:flex hidden">
          <div className="w-52 flex items-center flex-col space-y-0 text-sm -ml-20  h-14 -rotate-90 ">
            <p className="bg-purple-950 h-8 p-[14px] flex items-center text-gray-500">
              Teachnology Features
            </p>
            {items?.map((item) => (
              <div
                className="w-40 border p-2 border-gray-400 flex items-center justify-center"
                key={item.title}
              >
                {/* Condition use  */}
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
          </div>
        </div>
      </div>

      {/* left sidebar  */}
      <div className="h-full w-52 bg-slate-50">
        <div className="flex items-center flex-col space-y-0 text-sm">
          <p className="bg-purple-950 w-full h-8 flex items-center justify-center text-gray-500">
            Initiatives
          </p>
          {items?.map((item) => (
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
