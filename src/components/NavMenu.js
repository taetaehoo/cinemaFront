import React from "react";
import NavMenuItem from "./NavMenuItem";

const item1 = {
  path: "/movie",
  item: "영화",
}

const item2 = {
  path: "/theater",
  item: "극장",
}

const item3 = {
  path: "/ticket",
  item: "예매",
}

const item4 = {
  path: "/store",
  item: "스토어",
}
const item5 = {
  path: "/event",
  item: "이벤트",
}

const item6 = {
  path: "/benefits",
  item: "혜택",
}



const lists = [item1, item2, item3, item4, item5, item6];

const NavMenu = () => {
  return (
    <div className="contents">
      <ul className="nav_menu">
          {lists.map((item) => (<NavMenuItem props = {item} />))}
      </ul>
    </div>
  );
}

export default NavMenu;
