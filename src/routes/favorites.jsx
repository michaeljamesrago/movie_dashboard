import MovieList from "../components/MovieList"
// This route displays the movies that have been added to the Favorites list.
export default function Favorites( { favoriteMovies, isFavorite, handleFavorite }) {
  return (
    <div> 
      {favoriteMovies.length !== 0 ? <>
        <h3>Your Favorite Movies</h3>
        <MovieList movies={favoriteMovies} isFavorite={isFavorite} handleFavorite={handleFavorite} />            
        </>:
        <><h3>You have not favorited any movies yet.</h3></>
      }
    </div>
  )
}