import './App.css'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import apiClient from './lib/apiClient'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  // const [errorMessage, setErrorMessage] = useState("")
  const [movies, setMovies] = useState([])

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    apiClient.fetchMovies(
      (data) => {
        console.log(data)
        setMovies(data.data)
      }
    )
  }

  const activeLinkStyle = ({ isActive }) => {
    return {
    margin: "1rem 0",
    color: isActive ? "red" : "",
    };
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Search</h1>
      </header>
      <nav>*
        <NavLink style = {activeLinkStyle} to="/top">Top Movies</NavLink>   *
        <NavLink style = {activeLinkStyle} to="/search">Search Movies</NavLink>   *
        <NavLink style = {activeLinkStyle} to="/favorites">Favorites</NavLink>   *
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
