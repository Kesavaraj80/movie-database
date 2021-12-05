import React from "react";
import './App.css';
import IconButton from '@mui/material/IconButton';
import {useEffect,useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Display } from "./Display";
import { useHistory } from "react-router-dom";

export function MovieList() {
  const [add_movie, setAddmovie] = useState([]);
  const history = useHistory();
  
  const getMovies = () => {
    fetch("https://movies-database-kesavan.herokuapp.com/movies", {
      method: "GET"
    })
    .then(data => data.json())
    .then(mve => setAddmovie(mve));
  };

  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch("https://movies-database-kesavan.herokuapp.com/movies/"+id, {
      method: "DELETE"
    })
    .then(data => data.json())
    .then(mve => getMovies());
    console.log(id)
  };
  return (<div className="App">
    <div className="MovieList_containner">
      {add_movie.map((mve, index) => <div key={index}>
        <Display deleteMoviebutton={<IconButton aria-label="delete" color="error" onClick={() => {
          deleteMovie(mve._id)
        }}>
          <DeleteIcon />
        </IconButton>} editMovieButton={<IconButton aria-label="Edit Movie" color="primary" onClick={() =>history.push("/movies/edit/" + mve._id)}>
          <EditIcon />
        </IconButton>} name={mve.name} id={mve._id} image={mve.poster} movie_desc={mve.summary} rating={mve.rating}/>
      </div>)}
    </div>
  </div>);
}
