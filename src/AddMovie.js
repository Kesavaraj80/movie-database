import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react"
import { useHistory } from "react-router-dom";
import './App.css';

export function AddMovie({setAddmovie,add_movie}) {
  const history = useHistory();
  const [new_name, setMoviename] = new useState("");
  const [new_movie_pic, setMovieimage] = new useState("");
  const [new_desc, setMovidesc] = new useState("");
  const [new_trailer, setTrailer] = new useState("");

  const createMovie = (newMovie) => {
    fetch("https://6173de34110a740017223187.mockapi.io/movies", {
      method: "POST",
      body:JSON.stringify(newMovie),
      headers: {'Content-type': 'application/json'}
    })
    .then(data => data.json())
    .then(data =>history.push("/movies"))
  };

  const addMovie = () => {
    const newMovie = { 
      name: new_name, 
      movie_pic: new_movie_pic, 
      desc: new_desc, 
      trailer: new_trailer };
      createMovie(newMovie)
      
  }
  
  return (<div className="add_movie_form">
    <div className="add_movie_container">
      <TextField id="outlined-basic" label="Enter Movie Name" variant="outlined" onChange={event =>setMoviename(event.target.value)} />
      <TextField id="outlined-basic" label="Paste Movie Image URL" variant="outlined" margin="normal" onChange={event => setMovieimage(event.target.value)} />
      <TextField id="outlined-basic" label="Enter Movie Description" variant="outlined" margin="normal" onChange={event => setMovidesc(event.target.value)} />
      <TextField id="outlined-basic" label="Enter Movie Trailer" variant="outlined" margin="normal" onChange={event => setTrailer(event.target.value)} />
      <Button variant="contained" size="large" onClick={() => {
        addMovie();
      }}>Add Movie</Button>
    </div>
  </div>);
}
