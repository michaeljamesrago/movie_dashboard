const MovieListItem = ({ movie, isFavorite, handleFavorite }) => {
    const favoriteHandler = handleFavorite(movie);
    const favoriteOrUnfavorite = isFavorite(movie.id) ? "Unfavorite" : "Favorite"
    return (
        <li>
          <div>{movie.title}
            <button 
              className="favorite"
              onClick={() => favoriteHandler(movie.id)}
            >{favoriteOrUnfavorite}
            </button>
          </div>
        </li>
    )
}

export default MovieListItem
