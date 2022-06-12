import React from "react";

const SelectedTime = (props) => {
  const check = () => {
    const ul = document.querySelector("#sel");
    const li = ul.querySelector("li");
    if (props.seat.length === parseInt(props.theater.total_seat)) {
      li.classList.add("disabled");
    }
  };
  if (props.seat.length !== 0) {
    check();
  }
  return (
    <>
      <span className="title">
        <span className="name">2D</span>
        <span className="floor">
          {props.theater.floor}, {props.theater.hall}
        </span>
        <span className="seatcount">(총 {props.theater.total_seat})</span>
      </span>
      <ul id="sel">
        <li
          className=""
          onClick={(event) => {
            props.onClick(event);
          }}
        >
          <span className="time">
            {props.screen.length === 0 ? null : props.screen[0].screen_time}
          </span>
          <span className="count">
            {parseInt(props.theater.total_seat) - props.seat.length}석
          </span>
        </li>
      </ul>
    </>
  );
};

export default SelectedTime;
