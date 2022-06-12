import React , {useState, useEffect}from "react";
import axios from "axios";
import SelectedTime from "./SelectedTime";

const Theater = (props) => {
  
  const [theater, setTheater] = useState({});
  const [screen, setScreen] = useState([]);
  const [seat, setSeat] = useState([]);
  useEffect(() => {
    const getData = async (props) => {
      await axios.get("http://localhost:8000/theater/"+props.theater.theater)
      .then((res) => {
        setTheater(res.data);
      })
      .catch((err) => console.log({error: err.message}))
    }
    getData(props);
    
  }, [props]);//몇 관 몇 층의 용도

  useEffect(() => {
    const getData = async (props) => {
      let body = {
        movie: props.theater.movie,
        theater: props.theater.theater
      }
      await axios.post("http://localhost:8000/screen/screen", body)
      .then((res) => {
        setScreen(res.data);
        
      })
      .catch((err) => console.log({error: err.message}));
    }
    getData(props);
  }, [props]);
  
  
  useEffect(() => {
    const getData = async () => {
      await axios.get("http://localhost:8000/seat/"+screen[0]._id)
      .then((res) => {
        setSeat(res.data);
      })
      .catch((err) => console.log({error: err.message}));
    }
    getData();
  }, [screen]);

  return (
    <div className="theater">
        <SelectedTime theater = {theater} screen = {screen} seat = {seat} onClick = {props.onClick}/>
    </div>
  );
};

export default Theater;
