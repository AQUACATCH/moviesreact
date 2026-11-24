import React from 'react'
import { useState } from 'react'
import { Filter } from '../components/Filter'
import { SearchInput } from '../components/SearchInput'
import { useEffect } from 'react'
import { getMedia } from '../utils'
import { MediaList } from '../components/MediaList'
import { Pagination } from '../components/Pagination'

export const SearchMedia = () => {
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [type, setType] = useState('movie')
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('') 
  const [results, setResults] = useState(null)

  const HandleSearch = () => {
    if(!search) return;
    setQuery(search)
    setPage(1)
  }

  useEffect(() => {
    if(!query) return
    getMedia(type, query, page).then(data => {
      setResults(data.results)
      // A TMDB legfeljebb 500 oldalt enged lekérni
      setMaxPage(Math.min(data.total_pages, 500))
    })
  }, [query, type, page])

  return (
    <div>
      <div className='flex justify-center items-center gap-1 p-5'>
        <Filter type={type} setType={setType}/>
        <SearchInput search={search} setSearch={setSearch}/>
        <button onClick={HandleSearch} className='rounded p-2 bg-red-500 hover:bg-red-600'>Search</button>
      </div>
      {results && <MediaList results={results} type={"search"}/>}
      {results && maxPage > 1 && <Pagination {...{page, setPage, maxPage}}/>}
    </div>
  )
}
