import React, {useState} from "react";
import MovieSelector from "./MovieSelector";
import OrderButton from "./OrderButton";
import ColHead from "./ColHead";


const SelectMovie = (props) => {
  const [id, setId] = useState("");
  
  return (
    <div className="section select-movie">
      <ColHead>영화</ColHead>
      <OrderButton setId={setId}/>
      <div className="col-body">
        <MovieSelector id = {id} selected = {props.selected}/>
        
      </div>
      {console.log(id)}
    </div>
    
  );
  
};



export default SelectMovie;
