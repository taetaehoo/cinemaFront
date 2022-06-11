import React from "react";
import TheaterInfo from "./TheaterInfo";
import PlayInfo from "./PlayInfo";

const UserSelectInfo = ({ props }) => {
  return (
    <div class="section section_screen_select">
      <div id="user-select-info">
        <TheaterInfo props = {props}/>
        <PlayInfo />
      </div>
    </div>
  );
};

export default UserSelectInfo;
