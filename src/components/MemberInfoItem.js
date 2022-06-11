import React from "react";

const MemberInfoItem = ({props}) => {
  return (
    <li>
      <a href={props.path}>
        <img
          src={props.src}
          alt={props.value}
        />
        <span>{props.value}</span>
      </a>
    </li>
  );
};

export default MemberInfoItem;
