import redheart from '../images/redheart.png'
import heart from '../images/heart.png'
const MovieListItem = ({ movie, isFavorite, handleFavorite }) => {
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
                <img className="movie-art" src={movie.image} />
            </div>
          </div>
    )
}

export default MovieListItem
