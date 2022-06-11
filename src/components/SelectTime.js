import React from "react";
import TimeSelector from "./TimeSelector";
import ColHead from "./ColHead";



const SelectTime = () => {
  return (
    <div className="section select-time">
      <ColHead>시간</ColHead>
      <div className="col-body">
        <div className="time-option">
          <span className="morning">조조</span>
          <span className="night">심야</span>
        </div>
        <TimeSelector />
      </div>
    </div>
  );
}

export default SelectTime;
