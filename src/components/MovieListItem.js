const MovieListItem = ({ movie }) => {
    return (
        <div key={movie.id}>{movie.title}</div>
    )
}

export default MovieListItem
