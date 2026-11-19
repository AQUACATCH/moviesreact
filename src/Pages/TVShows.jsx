import React from 'react'
import { getTV } from '../utils'
import { MediaList } from '../components/MediaList'
import { useState } from 'react'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'

export const TVShows = () => {
  const [TVSeries, setTVSeries] = useState(null)
  useEffect(() => {
    getTV().then(setTVSeries)
  }, [])

  return (
    <div>
      {TVSeries ? <MediaList results={TVSeries} type={"tv"} />: <Loading/>}
    </div>
  )
}
