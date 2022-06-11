import React from "react";
import PersonScreen from "./PersonScreen";
import MiniMap from "./Minimap";

const Seat = () => {
  return (
    <div class="wrap">
      <div class="container">
        <div class="ticket">
          <div class="steps">
            <div class="step step2">
              <div class="section select-seat dimmed">
                <div class="col-head" id="skip_seat_list"></div>
                <div class="col-body">
                  <PersonScreen />

                  <MiniMap />
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
