import React from 'react'

function CardCarni({ img, title, description, provenienza}) {
  return (
    <div>
        <img src={img}/>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{provenienza}</p>
    </div>
  )
}

export default CardCarni