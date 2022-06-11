import React from "react";

const MovieItem = ({props, onClick}) => {
  const data = props.reservation_rate;
  const dataNum = data.substring(0, data.length-1);
  return (
    <li onClick={onClick} data-id = {props._id} data-title={props.movie_name} data-reserveRate={dataNum} props = {props}>
      {props.movie_name}
    </li>
  );
};

export default MovieItem;
