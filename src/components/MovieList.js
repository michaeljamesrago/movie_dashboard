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
const MovieList = ({ movies, isFavorite, handleFavorite, itemsPerPage=5 }) => {
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
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
    <>
      <div class="paginate-container">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          renderOnZeroPageCount={null}
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
      <div className="movie-list-container">
        <MovieListItems isFavorite={isFavorite} handleFavorite={handleFavorite} currentItems={currentItems} />
      </div>
    </>
  )
}

export default MovieList