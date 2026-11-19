import React from 'react'
import { img_300 } from '../utils'

export const MediaCard = ({attributes, Genres}) => {
  return (
    <div className="card bg-gray-800 w-96 shadow-sm">
        <figure>
          <img className='p-2 rounded-xl'
            src={img_300+attributes.poster_path}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className='flex justify-between'>
            <h2 className="card-title">{attributes.title ? attributes.title : attributes.name}</h2>
            <h2 className='card-title text-red-500'>{Math.round(attributes.vote_average*10)/10 + "/10"}</h2>
          </div>
          <div className="flex justify-between">
            <h3 className='uppercase text-gray-600'>{attributes.media_type == "movie" ? "Film" : "Sorozat"}</h3>
            <h3 className='uppercase text-gray-600'>{attributes.release_date ? attributes.release_date : attributes.first_air_date}</h3>

          </div>
          <p>{attributes.overview}</p>
          <div className="card-actions flex flex-col uppercase font-bold text-gray-600">
             <h3 className='uppercase'>Műfaj</h3>
             <div className='flex flex-wrap text-gray-400 text-[0.8rem]'>
              {Genres?.filter(({id}) => attributes.genre_ids?.includes(id))
                .map(({id, name}) => <span key={id} className='mr-2'>{name}</span>)}
             </div>
          </div>
        </div>
      </div>
  )
}
