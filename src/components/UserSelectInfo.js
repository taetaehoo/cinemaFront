import React from "react";
import TheaterInfo from "./TheaterInfo";


const UserSelectInfo = (props) => {
  return (
    <div class="section section_screen_select">
      <div id="user-select-info">
        <TheaterInfo props = {props}/>
        
      </div>
    </div>
  );
};

export default UserSelectInfo;
