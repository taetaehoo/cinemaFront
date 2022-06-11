import React , {useState, useEffect} from "react";
import axios from "axios";

const MovieDetail = (props) => {
  const prop = props.props;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if(movie === {}) return;
    axios
    .get("http://localhost:8000/movie/"+prop.movie)
    .then((res) => {
      setMovie(res.data);
    })
    .catch((err)=> console.log(err));
  }, []);
  
  
    const grade = movie.screen_grade;
      
  return (
    <div class="info-movie">
      { grade === 12 ? <span class="ico-grade grade-12"></span> : <span class="ico-grade grade-15"></span>}
      <a>{movie.movie_name}</a>
      <span class="round lightblue">
        <em>상영중</em>
      </span>
      <span>
        <em> </em>
      </span>
      <i>{movie.genre}</i>/<i> {movie.run_time}</i>/<i> {movie.release_date} 개봉</i>
    </div>
  );
};

export default MovieDetail;
