import React, { Component } from 'react'
import axios from 'axios'
import isNull from 'lodash/isNull'
const WithGists = (x) => WrapperComponent => {


   return class extends Component {
      state = {
         data: null
      }
      componentDidMount() {
         this.fetchGist()
      }
      fetchGist = async () => {
         const { data } = await axios.get(x)
         console.log(data)
         this.setState({
            data: data
         })
      }
      render() {
         const { data } = this.state
         return (
            <>
               {isNull(data) ? null : <WrapperComponent></WrapperComponent>}
            </>
         )
      }
   }
}

export default WithGists