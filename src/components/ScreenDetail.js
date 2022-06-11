import React , {useState, useEffect} from "react";
import axios from "axios";

const ScreenDetail = (props) => {
  const prop = props.props;
  const [theater, setTheater] = useState({});
  const [remain, setRemain] = useState({});
  
  useEffect(() => {
    if(theater === {}) return;
    axios
    .get("http://localhost:8000/theater/"+prop.theater)
    .then((res) => {
      setTheater(res.data);
    })
    .catch((err)=> console.log(err));
  }, [prop.theater]);

  useEffect(() => {
    if(remain === {}) return;
    axios
    .get("http://localhost:8000/seat/"+prop._id)
    .then((res) => {
      setRemain(res.data);
    })
    .catch((err) => console.log(err));
  }, [prop._id]);
  
  const re = parseInt(theater.total_seat) - remain;
  console.log(prop.screen_time);
  return (
    <div class="type-hall">
      <div class="info-hall">
        <ul>
          <li>2D</li>
          <li>{theater.hall} {theater.floor}</li>
          <li>총 {theater.total_seat}</li>
        </ul>
      </div>
      <div class="info-timetable">
        <ul>
          <li>
            <a href="#">
              <em>{prop.screen_time}</em>
              <span class="txt-lightblue">{re}석</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScreenDetail;
