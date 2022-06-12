import axios from "axios";
import React, { useState, useEffect } from "react";
import Theater from "./Theater";

const TimeSelector = (props) => {
  const toggleEvent = (sc, event) => {
    if (!event.target.classList.contains("disabled")) {
      const div = document.querySelector(".time-list");
      let lis = div.querySelectorAll("li");
      const isToggle = event.target.classList.contains("on");
      lis.forEach((li) => {
        li.classList.remove("on");
      });
      if (isToggle) {
        props.setTime(null);
      } else {
        event.target.classList.add("on");
        console.log(sc);
        props.setTime(sc);
      }
    }
  };

  const [screen, setScreen] = useState([]);

  useEffect(() => {
    if (screen === []) return;
    const getData = async (props) => {
      await axios
        .get("http://localhost:8000/screen/movie/" + props.movie._id)
        .then((res) => {
          setScreen(res.data);
        })
        .catch((err) => console.log(err));
    };
    getData(props);
  }, [props]);
  return (
    <div className="time-list">
      <div id="time" className="time-content">
        {screen.map((sc) => {
          return (
            <Theater
              theater={sc}
              onClick={(event) => {
                toggleEvent(sc, event);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelector;
