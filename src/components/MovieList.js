import MovieListItem from "./MovieListItem"

const MovieList = ({ movies, isFavorite, handleFavorite }) => {
    return (
        <div>
            <ul>
              {movies.map((movie) => {
                return (
                  <MovieListItem  key={movie.id} movie={movie} isFavorite={isFavorite} handleFavorite={handleFavorite} />
                )
              })}
            </ul>
        </div>
    )
}

export default MovieList