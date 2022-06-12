import React from "react";
import SelectNumberOfPeople from "./SelectNumberOfPeople";
import UserSelectInfo from "./UserSelectInfo";


const PersonScreen = (props) => {
  
  return (
    <div class="person_screen">
      <SelectNumberOfPeople setCount = {props.setCount}/>
      <UserSelectInfo movie = {props.movie} time = {props.time}/>
    </div>
  );
};

export default PersonScreen;
