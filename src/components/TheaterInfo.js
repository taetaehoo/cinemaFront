import React from "react";

const TheaterInfo = ({ props }) => {
    return (
        <p class="theater-info">
          <span class="site">CGV 구미</span>
          <span class="screen">{props.location}</span>
          <span class="seatNum">
            남은좌석
            <b class="restNum">166 </b>/<b class="totalNum">{props.totalSeat}</b>
          </span>
        </p>
    )
}

export default TheaterInfo;