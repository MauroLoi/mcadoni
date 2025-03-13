import React from 'react'

function CardCarni({ img, title, description, provenienza}) {
  return (
    <div className='max-w-sm rounded-xl overflow-hidden shadow-lg bg-slate-50 p-4 flex flex-col gap-2'>
        <img className='w-full h-48 object-cover rounded-t-xl' src={img}/>
        <h4 className="text-xl font-bold mt-2">{title}</h4>
        <p className="text-gray-600 pb-20">{description}</p>
        <p className="text-gray-600">Provenienza: {provenienza}</p>
    </div>
  )
}

export default CardCarni