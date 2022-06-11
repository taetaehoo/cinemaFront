import React from "react";

const ColHead = ({children}) => {
  return (
    <div className="col-head">
      <h3 className="title">{children}</h3>
    </div>
  );
};

export default ColHead;
