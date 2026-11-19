import React from 'react'
import { MediaCard } from './MediaCard'
import { getGenres, getTitle } from '../utils'
import { useEffect } from 'react'
import { useState } from 'react'

export const MediaList = ({ results, type}) => {
  const [Genres, setGenres] = useState(null)
  useEffect(() => {
    getGenres().then(setGenres)
  }, [])

  return (
    <div>
      <h2 className='text-center text-2xl p-4 font-bold text-gray-400 uppercase'>{getTitle(type)}</h2>
      <div className='max-w-[1200px] mt-5 flex flex-wrap gap-4 mx-auto'>
        {results.map((obj) =>
          <MediaCard key={obj.id} attributes={obj} Genres={Genres} />
        )}

      </div>
    </div>
  )
}
