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
//       poster: new_movie_pic, 
//       summary: new_desc, 
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
  name: yup.string().min(3, "Need bigger Name 😁"),
  poster: yup.string().required("Without Poster it will not look nice 😉"),
  summary: yup.string().min(20, "Type More Please 😅"),
  trailer: yup.string().required("Hey Buddy you forget to add trailer😏"),
  rating:yup.number().min(0,"Enter More then 0").max(10,"Enter Rating less then 10")
})
export function AddMovie({ setAddmovie, add_movie }) {
  const history = useHistory();

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        summary: "",
        trailer: "",
        rating:""
      },
      validationSchema: aboutValidationSchema,
      onSubmit: (values) => {
        createMovie(values);
      }
    });

  const createMovie = (newMovie) => {
    fetch("https://movies-database-kesavan.herokuapp.com/movies", {
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
          id="poster"
          name="poster"
          label="Paste Movie Image URL"
          value={values.poster}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.poster}
          helperText={errors.poster}
        />



        <TextField
          id="summary"
          name="summary"
          label="Enter Movie Description"
          value={values.summary}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.summary && touched.summary}
          helperText={errors.summary}
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