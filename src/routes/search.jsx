import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

// This route displays a search form with one input element, and a MovieList
// component. When the form is submitted, the input is sent to the server, and
// the response is used to create the content for the MovieList component.

const Search = ({ 
  searchTerm, 
  onchange, 
  searchMovies, 
  onsubmit, 
  isFavorite, 
  handleFavorite 
}) => {
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

export default Search