import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useHistory } from "react-router-dom";
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import './App.css';


export function Display({ name, image, movie_desc, deleteMoviebutton, id, editMovieButton }) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  return (
    <div className="Moviebox">
      <img
        className="Movie_img"
        src={image}
        width="500"
        height="600"
        alt="" />
      <h1 className="Movie_name">{name}
        <IconButton aria-label="show Movie Trailer" color="primary" onClick={() => history.push("/movies/" + id)}>
          <InfoIcon />
        </IconButton>
        {editMovieButton}
        <IconButton aria-label="show description" color="primary" onClick={() => setShow(!show)}>
          {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </h1>
      <div className="Desc_con">
        {show ? <p className="Movie_Desc">{movie_desc}</p> : ""}
      </div>
      <Counter dmoviebutton={deleteMoviebutton} />
    </div>
  );
}
