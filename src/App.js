import './App.css'
import { useState, useEffect } from 'react'
import apiClient from './lib/apiClient'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './routes/home'; 
import Top from './routes/top'
import Search from './routes/search'
import Favorites from './routes/favorites'
import Notification from './components/Notification';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchMovies, setSearchMovies] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // When the app component renders for the first time, it fetches the list
    // of top movies from the server, and updates the state with that data.
    const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    setFavoriteMovies(favorites)
    apiClient.fetchTopMovies(
      (data) => {
        setTopMovies(data.items);
      },
      (err) => {
        setErrorMessage(`Error: ${err.message}`)
      }
    )
  }, [setTopMovies])

  function sortMovies(movies) {
    //Sorts movies by whether they're favorites, then alphabetically by title.
    const sortedMovies = movies
      .slice()
      .sort((movieA, movieB) => {
      let result;
      if (isFavorite(movieA.id) && !isFavorite(movieB.id)) result = -1;
      else if (isFavorite(movieB.id) && !isFavorite(movieA.id)) result = 1;
      else result = movieA.title < movieB.title ? -2 : 2;
      return result;
    })
    return sortedMovies
  }

  function handleSearchTermChange(e) {
    // Handler for controlled text input element in ./routes/search.jsx
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    // Handler for submit event from form element in ./components/SearchForm.js
    e.preventDefault();
    apiClient.searchMovies(e.target.searchterm.value,
      (data) => {
        const sortedMovies = sortMovies(data.results)
        setSearchMovies(sortedMovies)
      },
      (err) => {
        setErrorMessage(`Error: ${err.message}`)
      }
    )
  }

  const isFavorite = (movieId) => {
    // Returns true if input string movieId is the id of a favorited movie.
    return favoriteMovies.some(favorite => {
      return favorite.id === movieId;
    })
  }

  const handleFavorite = (movie) => {
    /* This function toggles the movie between favorite and non-favorite. */
    return (movieId) => {
      let newFavorites = favoriteMovies.slice()
      if (isFavorite(movieId)) {
        newFavorites = newFavorites
        .filter(movie => movie.id !== movieId)
      } else {
        newFavorites = newFavorites
        .concat(movie)
      }
      newFavorites.sort((movieA, movieB) => {
        return movieA.title < movieB.title ? -1 : 1;
      })
      localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites))
      setFavoriteMovies(newFavorites);
    }
  }

  return (
    <div>
      <Notification message={errorMessage} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home topMovies={topMovies}/>}>
            <Route index element={
              <Top 
                topMovies={topMovies}
                isFavorite={isFavorite}
                handleFavorite={handleFavorite}
              />
            } />
            <Route path='/top' element={
              <Top 
                topMovies={topMovies}
                isFavorite={isFavorite}
                handleFavorite={handleFavorite}
              />
            } />
            <Route path='/search' element={
              <Search 
                searchTerm={searchTerm}
                onchange={handleSearchTermChange}
                searchMovies={searchMovies}
                onsubmit={handleSubmit}
                isFavorite={isFavorite}
                handleFavorite={handleFavorite}
              />
            } />
            <Route path='/favorites' element={
              <Favorites
                favoriteMovies={favoriteMovies}
                isFavorite={isFavorite}
                handleFavorite={handleFavorite}
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
