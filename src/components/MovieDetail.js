const MovieDetail = ({ show, onClose, modalContent}) => {
    if (!show) return null
    console.log(modalContent)
    return (
        <div className="modal" onClick={() => onClose()}>
            {!!modalContent ? 
              <div className='modal-content'>
                <div className="modal-title">
                  What people are saying about <em>{modalContent.title}</em>
                </div>
                {modalContent.items.map(detail => 
                  <div className="modal-item">
                    {detail.title}<div className="username"> - {detail.username}</div>
                  </div>)
                }
              </div>: <>There is no content</>
            }
        </div>
    )
}

export default MovieDetail