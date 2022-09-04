import MovieListItem from "./MovieListItem"

const MovieList = ({ movies, isFavorite, handleFavorite }) => {
    return (
        <div className="movie-list-container">
              {movies.map((movie) => {
                return (
                  <MovieListItem  key={movie.id} movie={movie} isFavorite={isFavorite} handleFavorite={handleFavorite} />
                )
              })}
        </div>
    )
}

export default MovieList