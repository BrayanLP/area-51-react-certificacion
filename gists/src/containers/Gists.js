import React, { Component } from 'react'
import axios from 'axios'
import GistList from '../components/GistList'
import WithGists from '../HOCs/withGists'
const URL_GIST = 'https://api.github.com/users/brayanlp/gists'
export default class extends Component {
   state = {
      gists: []
   }
   componentDidMount() {
      this.fetchGist()
   }
   fetchGist = async () => {
      const data = await axios.get(URL_GIST)
      console.log(data.data)
      this.setState({
         gists: data.data
      })
   }
   render() {
      const { gists } = this.state
      const userUrl = 'https://api.github.com/users/brayanlp/gists'
      const GistListWithData = WithGists(userUrl)(GistList)
      return (
         <>
            <h3>Gists</h3>
            <div className="gists">
               <div className="app-wrapper">
                  <GistList gists={gists}></GistList>
                  <GistListWithData />
               </div>
            </div>

         </>
      )
   }
}