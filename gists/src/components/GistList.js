import React from 'react'
import Gists from './Gists'


export default ({ gists = [] }) => {
   console.log(gists)
   return (
      <div className="gists">
         {
            gists.map(gist => <Gists key={gist.id} {...gist}></Gists>)
         }
      </div>
   )
}