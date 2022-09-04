import MovieList from "../components/MovieList"

export default function Top({ topMovies, isFavorite, handleFavorite }) {
    return (
        <div>
            <h3>These are the top movies today!</h3>
            <MovieList movies={topMovies} isFavorite={isFavorite} handleFavorite={handleFavorite} />
        </div>
    )
}