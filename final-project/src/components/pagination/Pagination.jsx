import React from 'react'

const Pagination = ({ page: currentPage, pages, setPage }) => {

  return (
    <div style={{
      dispay: 'flex',
    }}>
      {pages.map(page => 
        <button
          key={page}
          style={{
            background: page === currentPage ? "#ccc" : "#eee"
          }}
          onClick={() => setPage(page)}
        >
          {page + 1}
        </button>
      )}
    </div>
  )
}

export default Pagination
