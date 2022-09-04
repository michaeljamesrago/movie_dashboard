import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
export default function Search({ searchTerm, onchange, searchMovies, onsubmit, isFavorite, handleFavorite }) {
    return (
      <div>
        <h3>Search Movies</h3>
        <SearchForm searchTerm={searchTerm} onchange={onchange} onsubmit={onsubmit} />
        {searchMovies.length > 0 ? (
          <div>
            <h3>Search Results</h3>
            <MovieList movies={searchMovies} isFavorite={isFavorite} handleFavorite={handleFavorite} />
          </div>) : null
        }
      </div>
    )
}