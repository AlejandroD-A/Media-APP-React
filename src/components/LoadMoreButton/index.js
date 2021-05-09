import React from 'react'

import Loader from 'components/Loader'

function LoadMoreButton({ setPage, isLoadingNewPage }) {
  return (
    <>
      {isLoadingNewPage && <Loader />}
      {!isLoadingNewPage && (
        <button
          onClick={() => {
            setPage(prev => prev + 1)
          }}
        >
          Load More
        </button>
      )}
    </>
  )
}

export default React.memo(LoadMoreButton)
