import React, { useEffect } from 'react'

export const Categories = ({categories, selectedCategs, setSelectedCategs, setPage}) => {
    const HandleCheck = (object) => {
        setSelectedCategs(prev => prev.find((item) => item.id === object.id) ? prev.filter(item => item.id !==object.id) : [...prev, object])
        setPage(1)
    }

    useEffect(() => {
        console.log(selectedCategs)
    }, [selectedCategs])

    return (
    <div className='flex flex-wrap mx-auto align items-center justify-center gap-3 max-w-[1600px]'>
        {categories.map(obj => (
            <div key={obj.id} className='flex gap-1'>
                <input
                    type="checkbox"
                    onChange={() => HandleCheck(obj)}
                    checked={selectedCategs?.some(item => item.id === obj.id) ?? false}
                    className="checkbox checkbox-neutral"
                />
                <p>{obj.name}</p>
            </div>
        ))}
    </div>
  )
}
