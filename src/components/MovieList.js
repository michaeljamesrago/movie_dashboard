import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MovieListItem from "./MovieListItem"

function MovieListItems( { currentItems, isFavorite, handleFavorite } ) {
  return (
    <>
      {currentItems &&
        currentItems.map((movie) => (
          <MovieListItem  key={movie.id} movie={movie} isFavorite={isFavorite} handleFavorite={handleFavorite} />
        ))}
    </>
  );
}
const MovieList = ({ movies, isFavorite, handleFavorite, itemsPerPage=10 }) => {
   // We start with an empty list of items.
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, movies]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
      <div className="movie-list-container">
        <MovieListItems isFavorite={isFavorite} handleFavorite={handleFavorite} currentItems={currentItems} />
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </div>
  )
}

export default MovieList