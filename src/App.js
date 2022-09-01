import './App.css'
import { useState } from 'react'
import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import apiClient from './lib/apiClient'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [movies, setMovies] = useState([])

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    apiClient.fetchMovies(
      (data) => {
        setMovies(data.data)
      }
    )
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Search</h1>
      </header>
      <nav>
        <button>Search Movies</button>
        <button>Favorites</button>
      </nav>
      <main>
        <SearchForm searchTerm={searchTerm}
          onChange={handleSearchTermChange}
          onSubmit={handleSubmit}/>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
