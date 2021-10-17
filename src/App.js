import './App.css';
import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import { Route, Switch, Link, useHistory, useParams } from "react-router-dom";
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const movies = [
  {
    name: "Soorarai Pottru",
    movie_pic:
      "https://m.media-amazon.com/images/M/MV5BOGVjYmM0ZWEtNTFjNi00MWZjLTk3OTItMmFjMDAzZWU1ZDVjXkEyXkFqcGdeQXVyMTI2Mzk1ODg0._V1_.jpg",
    desc:
      "Inspired by the book 'Simply Fly', the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a teacher, who sets out to make the common man fly and takes on the most capital intensive industry in the world with the help of his friends, family and sheer will power.",
    trailer: "https://www.youtube.com/embed/fa_DIwRsa9o"
  },
  {
    name: "Asuran",
    movie_pic:
      "https://m.media-amazon.com/images/M/MV5BZTgzNTRkYWEtYWJmOC00NjMzLWFlMWEtMWRiNmFlMjBiOTI1XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    desc:
      "Asuran is an action film directed by Vetrimaaran, with the story taken from the novel Vekkai written by Poomani, a famous Tamil novelist. Dhanush plays two roles in this film. Famous Malayalam actress Manju Warrier plays the female lead. Many people expecting this movie will be the benchmark for Tamil cinema in both critically and commercially. Trailer of this film was released on Dhanush's birthday and the film was released on 3 October 2019.",
    trailer: "https://www.youtube.com/embed/vOCM9wztBYQ"
  },
  {
    name: "Thani Oruvan",
    movie_pic:
      "https://m.media-amazon.com/images/M/MV5BOTc3OWQzYjUtNmRiMi00MGUwLWI4ODEtMjU4YWRiYjBlM2Y1XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    desc:
      "Thoroughly frustrated with Industrialists and Politicians ruining the nation by denying the availability of cheap medicines, IPS officer Mithran is on a self-conceived quest to find the head of this medicine-mafia to channel all his anger towards him. But the ultimate villain, Siddharth Abhimanyu, who is also a decorated Scientist proves to be a ruthless and indomitable adversary",
    trailer: "https://www.youtube.com/embed/r5Lih8rKd6k"
  }
];

localStorage.setItem("movies", JSON.stringify(movies));

const getFromStorage = (key) => JSON.parse(localStorage.getItem("movies"));

function App() {
  const [add_movie, setAddmovie] = new useState(getFromStorage("movies"));
  const [new_name, setMoviename] = new useState("");
  const [new_movie_pic, setMovieimage] = new useState("");
  const [new_desc, setMovidesc] = new useState("");
  const newmve = { name: new_name, movie_pic: new_movie_pic, desc: new_desc };
  const history = useHistory();

  return (
    <section>
      <AppBar position="static" className="Menu_item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/addmovies">Add Movies</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <p>Welcome to Movies World</p>
        </Route>
        <Route exact path="/movies">
          <div className="App">
            <div className="MovieList_containner">
              {add_movie.map((mve, index) => (
                <div key={index}>
                  <Display
                    deleteMoviebutton={<IconButton aria-label="delete" color="error" onClick={() => {
                      // const copy_movies=[...add_movie];
                      const removeid = index;
                      setAddmovie(add_movie.filter((mv, idx) => idx !== removeid));
                    }}>
                      <DeleteIcon />
                    </IconButton>}
                    editMovieButton={
                      <IconButton aria-label="show Movie Description" color="primary" onClick={() => history.push("/movies/edit/" + index)}>
                        <EditIcon />
                      </IconButton>
                    }
                    name={mve.name}
                    id={index}
                    image={mve.movie_pic}
                    movie_desc={mve.desc}
                  />
                </div>
              ))}
            </div>
          </div>
        </Route>
        <Route path="/addmovies">
          <div className="add_movie_form">
            <div className="add_movie_container">
              <TextField id="outlined-basic" label="Enter Movie Name" variant="outlined"  onChange={event => setMoviename(event.target.value)}/>
              <TextField id="outlined-basic" label="Paste Movie Image URL" variant="outlined" margin = "normal" onChange={event => setMovieimage(event.target.value)}/>
              <TextField id="outlined-basic" label="Enter Movie Description" variant="outlined" margin = "normal" onChange={event => setMovidesc(event.target.value)}/>
              <Button variant="contained" size="large" onClick={() => setAddmovie([...add_movie, newmve])}>Add Movie</Button>
            </div>
          </div>
        </Route>
        <Route exact path="/movies/edit/:index">
          <Editmovie />
        </Route>
        <Route exact path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/about">
          <p>About Page</p>
        </Route>
      </Switch>
    </section>
  );
}

function MovieDetails() {
  const { id } = useParams();
  const movie = getFromStorage("movies")[id];
  console.log('Movie details', id);
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
  )

}

function Display({ name, image, movie_desc, deleteMoviebutton, id, editMovieButton }) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  return (
    <div className="Moviebox">
      <img
        className="Movie_img"
        src={image}
        width="500"
        height="600"
        alt=""
      />
      <h1 className="Movie_name">{name}
        <IconButton aria-label="show Movie Description" color="primary" onClick={() => history.push("/movies/" + id)}>
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

function Editmovie() {
  const { index } = useParams();
  console.log(index);
  const [new_name, setMoviename] = new useState(movies.name);
  const [new_movie_pic, setMovieimage] = new useState(movies.movie_pic);
  const [new_desc, setMovidesc] = new useState(movies.desc);
  const [add_movie, setAddmovie] = new useState(movies);
  const newmve = { name: new_name, movie_pic: new_movie_pic, desc: new_desc };
  return (
    <div className="add_movie_container">
      <h1>{index}</h1>
      <input type="text" placeholder="Enter Movie Name" onChange={event => setMoviename(event.target.value)}></input>
      <input type="text" placeholder="Paste Movie Image URL" onChange={event => setMovieimage(event.target.value)}></input>
      <input type="text" placeholder="Enter Movie Description" onChange={event => setMovidesc(event.target.value)}></input>
      <button className="Movie_add_btn" onClick={() => setAddmovie([...add_movie, newmve])}>Edit Movie</button>
    </div>
  )
}

export default App;
