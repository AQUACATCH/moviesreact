import React from 'react'
import { useState } from 'react'
import { getTrendings, img_300 } from '../utils'
import { useEffect } from 'react'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'
import { Pagination } from '../components/Pagination'

export const Home = () => {
  const [page, setPage] = useState(1)
  const [tendings, setTendings] = useState(null)

  useEffect(() => {
    getTrendings(page).then(setTendings)
  }, [page])



  return (
    <div>
      {tendings ? <MediaList results={tendings} type={"trending"} />: <Loading/>}
      <Pagination {...{page, setPage}}/>
    </div>
  )
}

