import React from "react";
import LineGraph from "./lineGraph";
import Map from "./map";

const ChartMap = () => (
  <div className="md:ml-36 h-[calc(100vh-5rem)] overflow-scroll ">
    <div className="mt-4 flex overflow-scroll">
      <LineGraph />
    </div>
    <div className="mt-10 ml-4 flex overflow-scroll z-0">
      <Map />
    </div>
  </div>
);

export default ChartMap;
