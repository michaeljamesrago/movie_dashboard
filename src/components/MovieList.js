import MovieListItem from "./MovieListItem"

const MovieList = ({ movies }) => {
    return (
        movies.map((movie) => {
            return (
                <MovieListItem movie={movie} />
            )
        })
    )
}

export default MovieList