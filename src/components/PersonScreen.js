import React from "react";
import SelectNumberOfPeople from "./SelectNumberOfPeople";
import UserSelectInfo from "./UserSelectInfo";

const theater = {
    location: "1관 4층",
    totalSeat: "184",
}

const PersonScreen = () => {
  return (
    <div class="person_screen">
      <SelectNumberOfPeople />
      <UserSelectInfo props = {theater}/>
    </div>
  );
};

export default PersonScreen;
