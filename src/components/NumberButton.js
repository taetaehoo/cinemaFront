import React from "react";

const NumberButton = ( {props, setCount} ) => {
 
  return (
    <li data-count={props.dataCount} class={props.class} onClick ={setCount}>
      
        {props.dataCount}
      
    </li>
  );
};

export default NumberButton;
