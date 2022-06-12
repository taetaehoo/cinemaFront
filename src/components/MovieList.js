import React , {useState, useEffect}from "react";
import Movie from "./Movie";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if(movies === []) return;
    axios
    .get("http://localhost:8000/screen")
    .then((res) => {
      setMovies(res.data);
    })
    .catch((err) => console.log(err));
  }, []);

  

  return (
    
    <ul>
      {
        movies.map((movie) => (
          <Movie props = {movie} />
        ))

        
      } 
    </ul>
    
  );
  
};

export default MovieList;