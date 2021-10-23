import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import './App.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function MovieDetails() {
  const history = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = () => {
    fetch("https://6173de34110a740017223187.mockapi.io/movies/" + id)
      .then(data => data.json())
      .then(mve => setMovie(mve));
  };
  useEffect(getMovie);
  console.log(movie);
  return (
    <div className="Movie_Details_container">
      <iframe
        width="100%"
        height="544"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="back_button">
        <Button variant="contained" size="large"  startIcon={<ArrowBackIcon/>}onClick={() => {
          history.push("/movies");
        }}>Back</Button>
      </div>
    </div>
  );

}
