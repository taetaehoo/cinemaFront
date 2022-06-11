import React ,{useState, useEffect} from "react";
import SelectMovie from "./SelectMovie";
import SelectTime from "./SelectTime";
import TnbBar from "./TnbBar";

const Ticket = () => {
  
  return (
    <div className="wrap">
      <div className="container">
        <div className="ticket">
          <div className="steps">
            <div className="step step1">
              <SelectMovie/>
              
              <SelectTime />
            </div>
          </div>
        </div>
      </div>
      <TnbBar/>
      
    </div>

  );
}

export default Ticket;
