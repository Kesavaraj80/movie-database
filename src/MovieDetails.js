import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import './App.css';

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie =() => {
    fetch("https://6173de34110a740017223187.mockapi.io/movies/"+id)
      .then(data => data.json())
      .then(mve => setMovie(mve));
  };
  useEffect(getMovie);
  console.log(movie);
  return (
    <div>
      <iframe
        width="100%"
        height="544"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  );

}
