import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';

// export function Editmovie() {
//   const { index } = useParams();
//   const history = useHistory();
//   console.log(index);


//   const getMovie = () => {
//     fetch("https://6173de34110a740017223187.mockapi.io/movies/" + index)
//       .then(data => data.json())
//       .then(mve => {
//         setMoviename(mve.name)
//         setMovieimage(mve.movie_pic)
//         setMovidesc(mve.desc)
//         setTrailer(mve.trailer)
//       });
//   };
//   useEffect(getMovie,[index]);
//   const [edit_name, setMoviename] = useState("");
//   const [edit_movie_pic, setMovieimage] = useState("")
//   const [edit_desc, setMovidesc] = useState("");
//   const [edit_trailer, setTrailer] = useState("");

//   const updateMovie = (editedMovie) => {
//     fetch("https://6173de34110a740017223187.mockapi.io/movies/" + index, {
//       method: "PUT",
//       body: JSON.stringify(editedMovie),
//       headers: { 'Content-type': 'application/json' }
//     })
//       // .then(data => data.json())
//       .then(data => history.push("/movies"))
//   };

//   const editMovie = () => {
//     const editedMovie = {
//       name: edit_name,
//       movie_pic: edit_movie_pic,
//       desc: edit_desc,
//       trailer: edit_trailer
//     };

//     updateMovie(editedMovie)

//   }

//   return (
//     <div className="form_container">
//       <div className="add_movie_container">
//         <TextField 
//         id="outlined-basic" 
//         label="Enter Movie Name" 
//         variant="outlined" 
//         value={edit_name} 
//         onChange={event => setMoviename(event.target.value)} 
//         />

//         <TextField 
//         id="outlined-basic" 
//         label="Paste Movie Image URL" 
//         variant="outlined" 
//         margin="normal" 
//         value={edit_movie_pic} 
//         onChange={event => setMovieimage(event.target.value)} 
//         />

//         <TextField 
//         id="outlined-basic" 
//         label="Enter Movie Description" 
//         variant="outlined" 
//         margin="normal" 
//         value={edit_desc} 
//         onChange={event => setMovidesc(event.target.value)} 
//         />

//         <TextField 
//         id="outlined-basic" 
//         label="Enter Movie Trailer" 
//         variant="outlined" 
//         margin="normal" 
//         value={edit_trailer} 
//         onChange={event => setTrailer(event.target.value)} 
//         />

//         <Button variant="contained" size="large" onClick={() => {
//           editMovie();
//         }}>Update Movie</Button>
//       </div>
//     </div>
//   );

// }


export function Editmovie() {
  const { index } = useParams();
  const history = useHistory();
  console.log(index);


  const getMovie = () => {
    fetch("https://movies-database-kesavan.herokuapp.com/movies/" + index)
      .then(data => data.json())
      .then(mve => {
        setMoviename(mve.name)
        setMovieimage(mve.poster)
        setMovidesc(mve.summary)
        setTrailer(mve.trailer)
        setRating(mve.rating)
      });
  };
  useEffect(getMovie,[index]);

  const [edit_name, setMoviename] = useState("");
  const [edit_movie_pic, setMovieimage] = useState("")
  const [edit_desc, setMovidesc] = useState("");
  const [edit_trailer, setTrailer] = useState("");
  const [edit_rating, setRating] = useState("");

  const updateMovie = (editedMovie) => {
    console.log("update movie function called");
    fetch("https://movies-database-kesavan.herokuapp.com/movies/" + index, {
      method: "PUT",
      body: JSON.stringify(editedMovie),
      headers: { 'Content-type': 'application/json',
       }
    })
      .then(data => data.json())
      .then(data => history.push("/movies"))
  };

  const editMovie = () => {
    console.log("edit movie clicked")
    const editedMovie = {
      name: edit_name,
      poster: edit_movie_pic,
      summary: edit_desc,
      trailer: edit_trailer,
      rating:edit_rating
    };

    updateMovie(editedMovie)

  }

  return (
    <div className="form_container">
      <div className="add_movie_container">
        <TextField
          id="outlined-basic"
          label="Enter Movie Name"
          variant="outlined"
          value={edit_name}
          onChange={event => setMoviename(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Paste Movie Image URL"
          variant="outlined"
          margin="normal"
          value={edit_movie_pic}
          onChange={event => setMovieimage(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Enter Movie Description"
          variant="outlined"
          margin="normal"
          value={edit_desc}
          onChange={event => setMovidesc(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Enter Movie Trailer"
          variant="outlined"
          margin="normal"
          value={edit_trailer}
          onChange={event => setTrailer(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Enter Movie Rating"
          variant="outlined"
          margin="normal"
          value={edit_rating}
          onChange={event => setRating(event.target.value)}
        />

        <Button variant="contained" size="large" onClick={() => {
          editMovie();
        }}>Edit Movie</Button>
      </div>
    </div>
  );

}
