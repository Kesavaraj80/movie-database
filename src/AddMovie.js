import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useState } from "react"
import { useHistory } from "react-router-dom";
import './App.css';
import { useFormik } from "formik";
import * as yup from 'yup';

// export function AddMovie({setAddmovie,add_movie}) {
//   const history = useHistory();
//   const [new_name, setMoviename] = new useState("");
//   const [new_movie_pic, setMovieimage] = new useState("");
//   const [new_desc, setMovidesc] = new useState("");
//   const [new_trailer, setTrailer] = new useState("");

//   const createMovie = (newMovie) => {
//     fetch("https://6173de34110a740017223187.mockapi.io/movies", {
//       method: "POST",
//       body:JSON.stringify(newMovie),
//       headers: {'Content-type': 'application/json'}
//     })
//     .then(data => data.json())
//     .then(data =>history.push("/movies"))
//   };

//   const addMovie = () => {
//     const newMovie = { 
//       name: new_name, 
//       movie_pic: new_movie_pic, 
//       desc: new_desc, 
//       trailer: new_trailer };
//       createMovie(newMovie)

//   }

//   return (<div className="add_movie_form">
//     <div className="add_movie_container">
//       <TextField id="outlined-basic" label="Enter Movie Name" variant="outlined" onChange={event =>setMoviename(event.target.value)} />
//       <TextField id="outlined-basic" label="Paste Movie Image URL" variant="outlined" margin="normal" onChange={event => setMovieimage(event.target.value)} />
//       <TextField id="outlined-basic" label="Enter Movie Description" variant="outlined" margin="normal" onChange={event => setMovidesc(event.target.value)} />
//       <TextField id="outlined-basic" label="Enter Movie Trailer" variant="outlined" margin="normal" onChange={event => setTrailer(event.target.value)} />
//       <Button variant="contained" size="large" onClick={() => {
//         addMovie();
//       }}>Add Movie</Button>
//     </div>
//   </div>);
// }

const aboutValidationSchema = yup.object({
  name: yup.string().min(3, "Need bigger Name"),
  movie_pic: yup.string().required("Without Poster it will not look nice"),
  desc: yup.string().min(20, "Type More Please"),
  trailer: yup.string().required("Hey Buddy you forget to add trailer"),
  rating:yup.string().required("Without Rating you don't know how the movie was...")
})
export function AddMovie({ setAddmovie, add_movie }) {
  const history = useHistory();

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        movie_pic: "",
        desc: "",
        trailer: "",
        rating:""
      },
      validationSchema: aboutValidationSchema,
      onSubmit: (values) => {
        createMovie(values);
      }
    });

  const createMovie = (newMovie) => {
    fetch("https://6173de34110a740017223187.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { 'Content-type': 'application/json' }
    })
      .then(data => data.json())
      .then(data => history.push("/movies"))
  };


  return (
    <div className="add_movie_form">
      <form onSubmit={handleSubmit} className="add_movie_container">
        <TextField
          id="name"
          name="name"
          label="Enter Movie Name"
          value={values.name}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name}
          helperText={errors.name}
        />
        <TextField
          id="movie_pic"
          name="movie_pic"
          label="Paste Movie Image URL"
          value={values.movie_pic}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.movie_pic}
          helperText={errors.movie_pic}
        />



        <TextField
          id="desc"
          name="desc"
          label="Enter Movie Description"
          value={values.desc}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.desc && touched.desc}
          helperText={errors.desc}
        />



        <TextField
          id="trailer"
          name="trailer"
          label="Enter Movie Trailer"
          value={values.trailer}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.trailer}
          helperText={errors.trailer}
        />

        <TextField
          id="rating"
          name="rating"
          label="Enter Movie rating"
          value={values.rating}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.rating}
          helperText={errors.rating}
        />

        <Button
          variant="contained"
          size="large" type="submit">Add Movie
        </Button>
      </form>
    </div>
  );
}