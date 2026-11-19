import React from 'react'

export const Filter = ({type, setType}) => {
    return (
        <fieldset onChange={(e) => setType(e.target.value)} className="fieldset">
            <select defaultValue="Pick a type" className="select bg-gray-400">
                <option value={"movie"}>Movies</option>
                <option value={"tv"}>TV Series</option>
            </select>
        </fieldset>
    )
}
