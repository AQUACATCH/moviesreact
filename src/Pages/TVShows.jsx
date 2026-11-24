import React from 'react'
import { getCategories, getSelectedMediaCateg, getTV } from '../utils'
import { MediaList } from '../components/MediaList'
import { useState } from 'react'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'
import { Pagination } from '../components/Pagination'

export const TVShows = () => {
  const [page, setPage] = useState(1)
  const [TVSeries, setTVSeries] = useState(null)
  const [categories, setCategories] = useState(null)
  const [selectedCategs, setSelectedCategs] = useState([])
  useEffect(() => {
    getSelectedMediaCateg("tv", selectedCategs.map(({id}) => id).join(','), page).then(setTVSeries)
  }, [selectedCategs.map(({id}) => id).join(','), page])

      useEffect(() => {
        getCategories("tv").then(data => {
          setCategories(data)
        })
      }, [])
  

  return (
    <div>
      {TVSeries ? <MediaList results={TVSeries} type={"tv"} categories={categories} selectedCategs={selectedCategs} setSelectedCategs={setSelectedCategs} setPage={setPage} />: <Loading/>}
      <Pagination {...{page, setPage}}/>
    </div>
  )
}
