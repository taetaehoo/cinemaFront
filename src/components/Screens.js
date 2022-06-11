import React from "react";
import MovieList from "./MovieList";

const Screens = () => {
  return (
    <div id="container">
      <div id="contents">
        <div class="wrap-theater">
          <div class="cols-content">
            <div class="cols-detail">
              <div class="showtimes-wrap">
                <div class="sect-showtimes">
                    <MovieList />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screens;
