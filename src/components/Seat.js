import React , {useState, useEffect }from "react";
import PersonScreen from "./PersonScreen";
import MiniMap from "./Minimap";
import { useParams } from 'react-router-dom';
import "../seat.css";

const Seat = () => {
  let {movie, time} = useParams();
  const [maxCount, setMaxCount] = useState(0);
  return (
    <div class="wrap">
      <div class="container">
        <div class="ticket">
          <div class="steps">
            <div class="step step2">
              <div class="section select-seat dimmed">
                <div class="col-head" id="skip_seat_list"></div>
                <div class="col-body">
                  <PersonScreen movie = {movie} time = {time} setCount = {setMaxCount}/>
                  
                  <MiniMap movie = {movie} time = {time} maxCount = {maxCount}/>
                </div>
              </div>
              <a href="#" class="btn-refresh">
                <span>다시하기</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
