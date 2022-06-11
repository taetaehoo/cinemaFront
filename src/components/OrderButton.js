import React from "react";

const color = (id) => {
  const rateSortBtn = document.getElementById("reserveRateSortBtn");
  const titleSortBtn = document.getElementById("titleSortBtn");

  rateSortBtn.classList.remove("color-red");
  titleSortBtn.classList.remove("color-red");

  if (id === "reserveRateSortBtn") {
    rateSortBtn.classList.add("color-red");
  }
  else if (id === "titleSortBtn") {
    titleSortBtn.classList.add("color-red");
  }
  else {
    
  }
};

const OrderButton = (props) => {
  return (
    <div className="sortContainer">
      <button
        onClick={() => {props.setId("titleSortBtn"); color("titleSortBtn")}}
        id="titleSortBtn"
        className="title order color-red"
        data-datanm="title"
      >
        <a href="#">가나다순</a>
        <span className="arrow"> </span>
      </button>
      <button
        onClick={() => {props.setId("reserveRateSortBtn"); color("reserveRateSortBtn")}}
        id="reserveRateSortBtn"
        className="reserveRate order"
        data-datanm="reserveRate"
      >
        <a href="#">예매율순</a>
        <span className="arrow"> </span>
      </button>
    </div>
  );
};

export default OrderButton;
