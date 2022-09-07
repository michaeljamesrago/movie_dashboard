import redheart from '../images/redheart.png'
import heart from '../images/heart.png'
const MovieListItem = ({ movie, isFavorite, handleFavorite, handleClick}) => {
    const favoriteHandler = handleFavorite(movie);
    const favoriteOrUnfavorite = isFavorite(movie.id) ? redheart : heart
    return (
          <div className="movie-container">
            <div className="movie-title-bar">
              <img
                alt={favoriteOrUnfavorite === heart ? "Favorite" : "Unfavorite"} 
                src={favoriteOrUnfavorite} 
                className="favorite"
                onClick={() => favoriteHandler(movie.id)}
              />
              <div className="movie-title">
                {movie.title}
              </div>
            </div>
            <div className="art-container">
                <img className="movie-art" data-id={`${movie.id}`} src={movie.image} alt={movie.title} onClick={(e) => handleClick(e, movie)} />
            </div>
          </div>
    )
}
export default MovieListItem
