import React from 'react'
export default (props) => {
   return (
      <div className='user'>
         <h3>{JSON.stringify(props, null, 3)}</h3>
      </div>
   )
}