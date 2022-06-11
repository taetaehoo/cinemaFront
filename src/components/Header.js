import React from "react";
import CgvLogo from "./CgvLogo";
import MemberInfo from "./MemberInfo";

const Header = () => {
  return (
    <div className="wrap">
      <div className="header">
        <div className="header_content">
          <div className="contents">
            <CgvLogo />
            <MemberInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
