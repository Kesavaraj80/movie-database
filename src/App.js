import './App.css';
// import Switch1 from '@mui/material/Switch';
import { Route, Switch, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import { useState } from "react";
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';
import { Editmovie } from './Editmovie';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { About } from './About';



function App() {
  const [colormode,setMode]= useState(false);
  const theme = createTheme({
    palette: {
      mode: colormode ? "dark":"light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <section>
          <AppBar position="static" className="Menu_item">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/addmovies">Add Movies</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><IconButton aria-label="delete" onClick={()=>setMode(!colormode)}>
                {colormode? <WbSunnyIcon />: <Brightness3Icon/>}
              </IconButton></li>
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
              <About />
            </Route>
          </Switch>
        </section>
      </Paper>
    </ThemeProvider>

  );
}
export default App;


