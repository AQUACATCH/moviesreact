import React from 'react'
import { getMovies } from '../utils'
import { MediaList } from '../components/MediaList'
import { useState } from 'react'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'

export const Movies = () => {
  const [Movies, setMovies] = useState(null)
  useEffect(() => {
    getMovies().then(setMovies)
  }, [])

  return (
    <div>
      {Movies ? <MediaList results={Movies} type={"movie"} />: <Loading/>}
    </div>
  )
}
