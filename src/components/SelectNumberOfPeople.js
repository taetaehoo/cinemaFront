import React , {useState, useEffect} from "react";
import NumberButton from "./NumberButton";

const button1 = {
    dataCount: "0",
    class: "selected",
}

const button2 = {
    dataCount: "1",
}

const button3 = {
    dataCount: "2",
}

const button4 = {
    dataCount: "3",
}

const button5 = {
    dataCount: "4",
}

const buttons = [button1, button2, button3, button4, button5];

const SelectNumberOfPeople = (props) => {
  const toggle = (event) => {
    const ul = document.getElementById("number");
    const lis = ul.querySelectorAll("li");

    lis.forEach((li) => {
      
      li.classList.remove("selected");
    })
    event.target.classList.add("selected");
    props.setCount(event.target.getAttribute("data-count"));
    
  }
 
  return (
    <div class="section section_numberofpeople">
      <div class="col-body">
        <div id="nopContainer" class="numberofpeople_select">
          <div id="maximum_people">* 최대 4명 선택 가능</div>
          <div class="group adult" id="nop_group_adult">
            <span class="title">일반</span>
            <ul id = "number">
              {buttons.map((button) => (<NumberButton props = {button} setCount = { (event) => toggle(event)}/>))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectNumberOfPeople;
