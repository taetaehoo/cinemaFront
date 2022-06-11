import React from "react";
import MemberInfoItem from "./MemberInfoItem";

const menu1 = {
  id: 1,
  src: "https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png",
  value: "로그인",
  path: "/login",
};

const menu2 = {
  id: 2,
  src: "https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png",
  value: "회원가입",
  path: "/register",
};

const menuList = [menu1, menu2];

const MemberInfo = () => {
  return (
    <ul className="memberInfo_wrap">
      {menuList.map((m) => (
        <MemberInfoItem props={m} />
      ))}
    </ul>
  );
};

export default MemberInfo;
