import React from "react";

const NumberButton = ({ props }) => {
  return (
    <li data-count={props.dataCount} class={props.class}>
      <a href="#">
        <span>{props.dataCount}</span>
      </a>
    </li>
  );
};

export default NumberButton;
