import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';
import { Editmovie } from './Editmovie';


function App() {
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
          <div className="Main_Home_container">
            <div className="Home_content_container">
              <h1 className="heading">Create Your Own Movie List</h1>
              <p className="content">Create your own Movie Database and use it for your future refference</p>
            </div>
          </div>
        </Route>
        <Route exact path="/movies">
          <MovieList ></MovieList>
        </Route>
        <Route path="/addmovies">
          <AddMovie />
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
export default App;
