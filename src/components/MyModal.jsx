import React from 'react'
import { getCredits, getTrailer, img_300, img_500 } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaYoutube } from "react-icons/fa6";
import noImagePlaceholder from '../assets/No-Image-Placeholder.webp'

export const MyModal = ({ attributes, isModalOpen, setIsModalOpen, Genres, type }) => {
    const mediaType = attributes.media_type ?? type
    const [trailer, setTrailer] = useState([])
    const [credits, setCredits] = useState(null)
    const [hoveredActorId, setHoveredActorId] = useState(null)

    useEffect(() => {
        if (!mediaType) return
        getTrailer(mediaType, attributes.id)
            .then(setTrailer)
            .catch(() => setTrailer([]))
        getCredits(mediaType, attributes.id).then(setCredits)
    }, [mediaType, attributes.id])

    const youtubeTrailer = trailer.find(v => v.site === "YouTube" && v.type === "Trailer")
        ?? trailer.find(v => v.site === "YouTube")
    credits && console.log(credits);
    
    return (
        <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
            <div className="modal-box bg-gray-800">
                <div className='flex justify-between'>
                    <h2 className="card-title">{attributes.title ? attributes.title : attributes.name}</h2>
                    <h2 className='card-title text-red-500'>{Math.round(attributes.vote_average * 10) / 10 + "/10"}</h2>
                </div>
                <div className='relative'>
                    <img className='p-2 rounded-xl'
                    src={attributes.backdrop_path ? img_500 + attributes.backdrop_path : noImagePlaceholder}
                    alt={attributes.title ? attributes.title : attributes.name} />
                    {youtubeTrailer && (
                        <a href={`https://www.youtube.com/watch?v=${youtubeTrailer.key}`} target="_blank" rel="noreferrer">
                            <FaYoutube className='text-6xl text-red-600 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
                        </a>
                    )}
                </div>
                <div className="flex justify-between">
                    <h3 className='uppercase text-gray-600'>{mediaType == "movie" ? "Film" : "Sorozat"}</h3>
                    <h3 className='uppercase text-gray-600'>{attributes.release_date ? attributes.release_date : attributes.first_air_date}</h3>
                </div>
                <p className={attributes.overview ? '' : 'text-gray-100'}>{attributes.overview ? attributes.overview : 'No Description'}</p>
                <div className="card-actions flex flex-col uppercase font-bold text-gray-600">
                    <h3 className='uppercase'>Műfaj</h3>
                    <div className='flex flex-wrap text-gray-400 text-[0.8rem]'>
                        {Genres?.filter(({ id }) => attributes.genre_ids?.includes(id))
                            .map(({ id, name }) => <span key={id} className='mr-2'>{name}</span>)}
                    </div>
                </div>
                {credits && credits.length > 0 && <div className="card-actions flex flex-col uppercase mt-3 font-bold text-gray-600">
                    <h3 className='uppercase'>Szereplők</h3>
                    <div className='flex flex-wrap text-gray-400 gap-1 text-[0.8rem]'>
                        {credits.slice(0,5).map((item) =>
                        <div className='relative' key={item.id}>
                            <p onMouseEnter={() => setHoveredActorId(item.id)} onMouseLeave={() => setHoveredActorId(null)}>{item.name}</p>
                            {hoveredActorId === item.id && (
                                <img className='max-w-[100px] rounded-xl border-gray-400 border absolute left-0 top-[-150px] pointer-events-none'
                                    src={item.profile_path ? img_300 + item.profile_path : noImagePlaceholder}
                                    alt={item.name} />
                            )}
                        </div>
                        )}
                    </div>
                </div>}
                <div className="modal-action">
                    <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={() => setIsModalOpen(false)} />
        </dialog>
    )
}
