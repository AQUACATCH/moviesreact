import React from 'react'
import { getCategories, getMovies, getSelectedMediaCateg } from '../utils'
import { MediaList } from '../components/MediaList'
import { useState } from 'react'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'
import { Pagination } from '../components/Pagination'

export const Movies = () => {
  const [page, setPage] = useState(1)
  const [Movies, setMovies] = useState(null)
  const [categories, setCategories] = useState(null)
  const [selectedCategs, setSelectedCategs] = useState([])
  useEffect(() => {
    getSelectedMediaCateg("movie", selectedCategs.map(({id}) => id).join(','), page).then(setMovies)
  }, [selectedCategs.map(({id}) => id).join(','), page])

    useEffect(() => {
      getCategories("movie").then(data => {
        setCategories(data)
      })
    }, [])
  return (
    <div>
      {Movies ? <MediaList results={Movies} type={"movie"} categories={categories} selectedCategs={selectedCategs} setSelectedCategs={setSelectedCategs} setPage={setPage} />: <Loading/>}
      <Pagination {...{page, setPage}}/>
    </div>
  )
}
