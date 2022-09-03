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

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchMovies, setSearchMovies] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState([])

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    setFavoriteMovies(favorites)
    apiClient.fetchTopMovies(
      (data) => {
        setTopMovies(data.items)
      }
    )
  }, [topMovies])

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log("submitted")
    e.preventDefault();
    apiClient.searchMovies(
      (data) => {
        setSearchMovies(data.results)
      }
    )
  }

  const isFavorite = (movieId) => {
    return favoriteMovies.some(favorite => {
      return favorite.id === movieId;
    })
  }

  const handleFavorite = (movie) => {
    return (movieId) => {
      let newFavorites = favoriteMovies.slice()
      if (isFavorite(movieId)) {
        newFavorites = newFavorites
        .filter(movie => movie.id !== movieId)
      } else {
        newFavorites = newFavorites
        .concat(movie)
      }
      localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites))
      setFavoriteMovies(newFavorites);
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
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
