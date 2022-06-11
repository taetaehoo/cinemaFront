import React from "react";
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

const SelectNumberOfPeople = () => {
  return (
    <div class="section section_numberofpeople">
      <div class="col-body">
        <div id="nopContainer" class="numberofpeople_select">
          <div id="maximum_people">* 최대 4명 선택 가능</div>
          <div class="group adult" id="nop_group_adult">
            <span class="title">일반</span>
            <ul>
              {buttons.map((button) => (<NumberButton props = {button} />))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectNumberOfPeople;
