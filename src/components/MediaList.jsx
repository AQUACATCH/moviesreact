import React from 'react'
import { MediaCard } from './MediaCard'
import { getGenres, getTitle } from '../utils'
import { useEffect } from 'react'
import { useState } from 'react'
import { Categories } from './Categories'

export const MediaList = ({ results, type, categories, selectedCategs, setSelectedCategs, setPage}) => {
  const [Genres, setGenres] = useState(null)
  useEffect(() => {
    getGenres().then(setGenres)
  }, [])

  return (
    <div>
      <h2 className='text-center text-2xl p-4 font-bold text-gray-400 uppercase'>{getTitle(type)}</h2>
      {categories && <Categories categories={categories} selectedCategs={selectedCategs} setSelectedCategs={setSelectedCategs} setPage={setPage}/>}
      <div className='max-w-[1600px] mt-5 flex flex-wrap gap-4 mx-auto'>
        {results.map((obj) =>
          <MediaCard key={obj.id} attributes={obj} Genres={Genres} type={type}  />
        )}

      </div>
    </div>
  )
}
