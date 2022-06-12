import React ,{useState, useEffect} from "react";
import SelectMovie from "./SelectMovie";
import SelectTime from "./SelectTime";
import TnbBar from "./TnbBar";

const Ticket = () => {
  const [movie, setMovie] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(()=> {
    console.log(time);
    
    if(time !== null) {
      const tmp = document.querySelector("#time");
      const lis = tmp.querySelectorAll("li");
      lis.forEach((li)=> {
        li.classList.remove("on");
      })
    }
  }, [movie])

  
  return (
    <div className="wrap">
      <div className="container">
        <div className="ticket">
          <div className="steps">
            <div className="step step1">
              <SelectMovie setMovie = {setMovie}/>
              
              <SelectTime movie = {movie} setTime = {setTime}/>
            </div>
          </div>
        </div>
      </div>
      <TnbBar movie = {movie} time = {time}/>
      
    </div>

  );
}

export default Ticket;
