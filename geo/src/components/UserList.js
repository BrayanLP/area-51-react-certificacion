import React from 'react'
import User from './User'

export default (props) => {
    return (
        <div className='wrapper'>
            {props.data.map((data, index) => {
                return (
                    <User key={index + 1}
                        name={data.name ? data.name.first : ''}
                        email={data.email}
                        image={data.picture.thumbnail}
                        location={data.location}
                    ></User>

                )
            })}
        </div>
    )
}