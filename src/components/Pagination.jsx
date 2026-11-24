import React from 'react'

export const Pagination = ({page, setPage, maxPage=10}) => {
  const numbers = [...Array(maxPage)].map((_, i) => i + 1)

  return (
    <div className='flex justify-center items-center p-10'>
      <div className="join">
        {numbers.map(nr => 
          <input key={nr}
          className="join-item btn btn-square bg-gray-400"
          type="radio"
          name="options"
          aria-label={nr}
          checked={page === nr}
          onChange={() => setPage(nr)}
          />
        )}
      </div>
    </div>
  )
}
