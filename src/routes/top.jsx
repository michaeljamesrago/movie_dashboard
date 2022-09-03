import MovieList from "../components/MovieList"

export default function Top({ topMovies, isFavorite, handleFavorite }) {
    return (
        <div>
            <MovieList movies={topMovies} isFavorite={isFavorite} handleFavorite={handleFavorite} />
        </div>
    )
}