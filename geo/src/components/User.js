import React from 'react'

export default ({ name, image, email, location: { city, state, street } }) => {
    return (
        <div className='user'>
            <picture>
                <img src={image} alt={name}></img>
            </picture>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
                <small>{state}, {city}, {street ? street.name : ''}</small>
            </div>
        </div>
    )
}