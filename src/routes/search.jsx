import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
{/* <SearchForm searchTerm={searchTerm}
onChange={handleSearchTermChange}
onSubmit={handleSubmit} /> */}
export default function Search() {
    return (
      <div>
        <h1>Search Movies</h1>
        <SearchForm />
      </div>
    )
}