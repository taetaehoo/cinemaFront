import React from "react";

const Theater = (props) => {
    console.log(props);
  return (
    <div className="theater">
      <span className="title">
        <span className="name">2D</span>
        <span className="floor">3관 8층</span>
        <span className="seatcount">(총 172석)</span>
      </span>
      <ul id="sel">
        <li className="disabled">
          <span className="time">20:00</span>
          <span className="count">예매종료</span>
        </li>
        <li>
          <span className="time">
            <span>23:00</span>
          </span>
          <span className="count">162석</span>
        </li>
      </ul>
    </div>
  );
};

export default Theater;
