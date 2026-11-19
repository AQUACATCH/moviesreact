import React from 'react'
import { useState } from 'react'
import { Filter } from '../components/Filter'
import { SearchInput } from '../components/SearchInput'
import { useEffect } from 'react'
import { getMedia } from '../utils'
import { MediaList } from '../components/MediaList'

export const SearchMedia = () => {
  const [type, setType] = useState('movie')
  const [search, setSearch] = useState(null)
  const [results, setResults] = useState(null)
  const HandleSearch = () => {
    if(!search) return;
    getMedia(type, search).then(setResults)
      
  }
  console.log(results)
  return (
    <div>
      <div className='flex justify-center items-center gap-1 p-5'>
        <Filter type={type} setType={setType}/>
        <SearchInput search={search} setSearch={setSearch}/>
        <button onClick={HandleSearch} className='rounded p-2 bg-red-500 hover:bg-red-600'>Search</button>
      </div>
      {results && <MediaList results={results} type={"search"}/>}
    </div>
  )
}
