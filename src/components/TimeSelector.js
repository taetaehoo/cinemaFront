import React ,{useState, useEffect} from "react";
import Theater from "./Theater";

const theater1 = {
  name: "2D",
  floor: "3관 8층",
  maxCount: "172",
  time: "20:00",
  remainCount: 0,
};

const theater2 = {
  name: "2D",
  floor: "3관 8층",
  maxCount: "172",
  time: "23:00",
  remainCount: 162,
};

const theaters = [theater1, theater2];

const TimeSelector = () => {
  
  return (
    <div className="time-list">
      <div id="time" className="time-content">
        <Theater props = {theaters}/>
      </div>
    </div>
  );
};

export default TimeSelector;
