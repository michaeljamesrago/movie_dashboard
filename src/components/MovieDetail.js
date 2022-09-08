const MovieDetail = ({ show, onClose, modalContent}) => {
    if (!show) return null
    return (
        <div className="modal" onClick={() => onClose()}>
            {!!modalContent ? 
              <div className='modal-content'>
                <div className="modal-title">
                  What people are saying about <em>{modalContent.title}</em>
                </div>
                {modalContent.items.map(detail => 
                  <div className="modal-item" key={`${detail.title}${detail.username}`}>
                    {detail.title}<div className="username"> - {detail.username}</div>
                  </div>)
                }
              </div>: null
            }
        </div>
    )
}

export default MovieDetail