import React  from "react";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar"

const Nav = () => {
  return (
    <div className="nav">
      <NavMenu />
      <SearchBar />
    </div>
  );
}

export default Nav;
