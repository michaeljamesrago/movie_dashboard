import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MovieListItem from "./MovieListItem"
import MovieDetail from './MovieDetail';
import apiClient from '../lib/apiClient';

const MovieList = ({ movies, isFavorite, handleFavorite, itemsPerPage=5 }) => {
  // These elements of the state are related to paginated content, 
  // for the ReactPaginate element
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // These are for the modal element that shows up when you click 
  // one of the movie images
  const [showDetail, setShowDetail] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  useEffect(() => {
    // This hook is for the purpose of updating the paginated content 
    // and page navigation in the ReactPaginate element
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, movies]);

  const handleClick = (e) => {
    // This function requests movie reviews from the server, updates the 
    // state and makes visible a modal element that shows those reviews.
    console.log(e.target.dataset.id)
    e.preventDefault()
    apiClient.fetchMovieReviews(e.target.dataset.id, (data) => {
      setModalContent(data)
    })
    setShowDetail(true)
  }

  const handlePageClick = (event) => {
    // This function updates the offset of paginated items when a user 
    // clicks on a page number in the ReactPaginate element.
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  const onClose = () => {
    // This function closes the modal no matter where you click in it.
    setShowDetail(false)
    setModalContent(null)
  }
  return (
    <>
      <div className="paginate-container">
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
        {currentItems &&
          currentItems.map((movie) => (
            <MovieListItem  key={movie.id} movie={movie} isFavorite={isFavorite} handleFavorite={handleFavorite} handleClick={handleClick} />
          ))
        }
      </div>
      <MovieDetail show={showDetail} onClose={onClose} modalContent={modalContent}/>
    </>
  )
}

export default MovieList