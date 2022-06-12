import React , {useState, useEffect} from "react";
import MovieItem from "./MovieItem";
import axios from "axios";

const MovieSelector = (props) => {
  const toggleEvent = (movie, event) => {

    const ul = document.querySelector("#content");
    let lis = ul.querySelectorAll("li");
    const isToggle = event.target.classList.contains("on");
    lis.forEach((li) => {
      li.classList.remove("on");
    });
  
    if (!isToggle) {
      event.target.classList.add("on");
      props.setMovie(movie);
    }
    else {
      props.setMovie({});
    }
  };
  
  
  const titleSort = () => {
    const ul = document.getElementById("content");
  
    const lis = ul.querySelectorAll("li");
    var vals = [];
    for (let i = 0; i < lis.length; i++) {
      vals.push(lis[i]);
    }
    vals.sort(function (a, b) {
      var textA = a.getAttribute("data-title");
      var textB = b.getAttribute("data-title");
      if (textA > textB) return 1;
      else if (textA < textB) return -1;
      else return 0;
    });
    for (let i = 0; i < lis.length; i++) {
      lis[i].remove();
    };
  
    for(let i = 0; i < vals.length; i++) {
      ul.appendChild(vals[i]);
    }
  
    
  };
  
  const rateSort = () => {
    const ul = document.getElementById("content");
    var lis = ul.getElementsByTagName("li");
      var vals = [];
      for (let i = 0; i < lis.length; i++)
          vals.push(lis[i]);
      vals.sort(function(a, b) {
          var rateA = a.getAttribute("data-reserveRate");
          var rateB =  b.getAttribute("data-reserveRate");
          return rateB - rateA;
      });
      for (let i = 0; i < lis.length; i++) {
          lis[i].remove();
      }
  
      for (let i = 0; i < vals.length; i++) {
        ul.appendChild(vals[i]);
      }
  
  }

  const order = () => {
    if (props.id === "titleSortBtn") {
      titleSort();
    }
    else if (props.id === "reserveRateSortBtn") {
      rateSort();
    }
    else {

    }
  };
  

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if(movies === []) return;
    axios
    .get("http://localhost:8000/movie/")
    .then((res) => {
      setMovies(res.data);
    })
    .catch((err) => console.log(err));
  }, []);

  order();
  
  return (
    <div className="movie-select">
      <div className="movie-list">
        <ul id="content">
          {
            movies.map((movie) => (
              <MovieItem props = {movie} onClick = {(event) => { toggleEvent(movie, event)}}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default MovieSelector;
