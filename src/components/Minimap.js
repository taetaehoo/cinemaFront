import React, { useState, useEffect } from "react";
import "../seat.css";
import axios from "axios";
import Seat1 from "./Seat1";
import Seat2 from "./Seat2";

const MiniMap = (props) => {
  const user = "62a5d0c4cdfa0924fd2c6266";
  const getData = async (props, row, col) => {
    let body = {
      seat_column: row,
      seat_number: col,
      member: user,
      screen: props.time
    }

    await axios.post("http://localhost:8000/seat/reserve", body)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log({error: err.message}));
  }
  const reservation = () => {
    const toggles = document.querySelectorAll(".on");
    toggles.forEach((li) => {
      const row = li.getAttribute("data-row");
      const col = parseInt(li.getAttribute("data-col"));
      console.log(row);
      console.log(col);
      getData(props, row, col);
    })
  window.location.href = "http://localhost:3000/";
  }

  const [count, setCount] = useState(0);
  const [reserve, setReserve] = useState(false);
  
  const toggleEvent = (event) => {
    if (props.maxCount < count) {
      console.log("갯수 초과");
      return;
    } else {
      const isDisabled = event.target.classList.contains("disabled");
      if(isDisabled) {
        return;
      }
      const isToggle = event.target.classList.contains("on");
      if (isToggle && count > 0) {
        event.target.classList.remove("on");
        setCount(count - 1);
      } else if (!isToggle && count < props.maxCount) {
        event.target.classList.add("on");
        setCount(count + 1);
      }
    }
  };

  const deleteToggle = () => {
    const toggles = document.querySelectorAll(".on");
    if (toggles.length !== 0) {
      toggles.forEach((li) => {
        console.log(li);
        li.classList.remove("on");
        setCount(0);
      });
    }
  };

  useEffect(() => {
    deleteToggle();
  }, [props]);

  useEffect(()=> {
    if(props.maxCount != 0 && props.maxCount == count) {
      setReserve(true);
    }
    else {
      setReserve(false);
    }
    
  }, [count]);

  
  const [theater, setTheater] = useState({});
  const [isBig, setIsBig] = useState(false);
  useEffect(() => {
    const getData = async (props) => {
      await axios
        .get("http://localhost:8000/screen/" + props.time)
        .then((res) => {
          setTheater(res.data);
        })
        .catch((err) => {
          console.log({ error: err.message });
        });
    };
    getData(props);
  }, [props]);
  useEffect(() => {
    if (theater.theater === "62a4238dd41690f996620543") {
      setIsBig(false);
    } else {
      setIsBig(true);
    }
  }, [theater]);

  const [seat, setSeat] = useState([]);
  
  useEffect(() => {
    const getData = async (props) => {
      await axios
      .get("http://localhost:8000/seat/"+props.time)
      .then((res) => {
        setSeat(res.data);
      })
      .catch((err) => {
        console.log({error: err.message});
      })
    }
    getData(props);
  }, [props]);

  return (
    <div class="theater_minimap">
      <div class="theater nano" id="seat_minimap_nano"></div>
      <div class="content">
        <div class="screen" title="SCREEN">
          <span class="text"></span>
        </div>
        <div class="content2">
          {isBig ? (
            <Seat2 onClick={(event) => toggleEvent(event)} time = {props.time} seats = {seat}/>
          ) : (
            <Seat1 onClick={(event) => toggleEvent(event)} time = {props.time} seats = {seat}/>
          )}
        </div>
      </div>
      <div class = "reserveBtn">
        {reserve ? <a onClick = {reservation}>예매</a> : <a>예매 </a>}
      </div>
    </div>
  );
};

export default MiniMap;
