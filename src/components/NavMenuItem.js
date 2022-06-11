import React from "react";

const NavMenuItem = ({ props }) => {
  return (
    <li>
      <h2>
        <a href={props.path}>{props.item}</a>
      </h2>
    </li>
  );
};

export default NavMenuItem;
