import React, { useState, useEffect } from "react";
import axios from "axios";

const TheaterInfo = (props) => {
  
  const [screen, setScreen] = useState({});
  const [theater, setTheater] = useState({});
  const [seat, setSeat] = useState({});
  const [re, setRe] = useState(0);

  useEffect(() => {
    const getData = async (props) => {
      await axios
        .get("http://localhost:8000/screen/" + props.props.time)
        .then((res) => {
          setScreen(res.data);
        })
        .catch((err) => console.log({ err }));
    };
    getData(props);
  }, [props]);

  useEffect(() => {
  const getData = async (props) => {
    await axios
      .get("http://localhost:8000/screen/" + props.props.time)
      .then((res) => {
        setScreen(res.data);
      })
      .catch((err) => console.log({ err }));
  };
  getData(props);
}, []);
  

  useEffect(() => {
    const getData = async (props) => {
      await axios
        .get("http://localhost:8000/seat/" + props.props.time)
        .then((res) => {
          setSeat(res.data);
        })
        .catch((err) => console.log({ error: err.message }));
    };
    getData(props);
    console.log();
  }, []);

  useEffect(() => {
    if(screen.length === {}) {
      const getData = async () => {
        await axios
          .get("http://localhost:8000/theater/" + screen.theater)
          .then((res) => {
            setTheater(res.data);
          })
          .catch((err) => console.log({ error: err.message }));
      };
      getData(props);
    }
  }, []);

  useEffect(() => {
    setRe(parseInt(theater.total_seat) - seat.length);
  }, []);

  console.log(screen);
  return (
    <p class="theater-info">
      <span class="site">{theater.theater_name}</span>
      <span class="screen">
        {theater.hall} {theater.floor}
      </span>
      <span class="seatNum">
        남은좌석
        <b class="restNum">{re} </b>/
        <b class="totalNum">{theater.total_seat}</b>
      </span>
      <p></p>
      <p class="playYMD-info">
        <b>{screen.screen_date}</b>
        <b class="exe">(일)</b>
        <b>{screen.screen_time}</b>
      </p>
    </p>
  );
};

export default TheaterInfo;
