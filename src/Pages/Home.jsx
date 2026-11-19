import React from 'react'
import { useState } from 'react'
import { getTrendings, img_300 } from '../utils'
import { useEffect } from 'react'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'

export const Home = () => {

  const [tendings, setTendings] = useState(null)
  tendings && console.log(tendings)

  useEffect(() => {
    getTrendings().then(setTendings)
  }, [])


  return (
    <div>
      {tendings ? <MediaList results={tendings} type={"trending"} />: <Loading/>}
    </div>
  )
}

