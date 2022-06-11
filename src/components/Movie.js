import React from "react";
import MovieDetail from "./MovieDetail";
import ScreenDetail from "./ScreenDetail";

const Movie = (props) => {
  return (
    <li>
      <div class="col-times">
        <MovieDetail props={props.props}/>
        <ScreenDetail props={props.props}/>
      </div>
    </li>
  );
};

export default Movie;
