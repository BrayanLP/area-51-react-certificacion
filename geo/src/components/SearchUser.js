import React, { Component } from 'react'
import debounce from 'lodash/debounce'
export default class extends Component {
   constructor(props) {
      super(props)
      this.state = {
         value: ''
      }
      this.handleChange = this.handleChange.bind(this)
   }
   handleChange(e) {
      const { handleFilter } = this.props
      // console.log(e.target.value)
      this.setState({ value: e.target.value })
      handleFilter(e.target.value)
   }
   render() {
      const { value } = this.state
      const { handleFilter } = this.props
      // console.log(debounce)
      return (
         <>
            <form className="form">

               <input
                  value={value}
                  className="input search"
                  placeholder="Ingresar nombre"
                  name="searchText" type="text"
                  autoComplete={'off'}
                  onChange={this.handleChange}

               // onKeyPress={(e) => this.handleKeyPress(e)}
               // onChange={(e) => console.log(e.target.value)}
               ></input>
               <button className="button" onClick={handleFilter}>SEARCH</button>
               {/* <select name="searchBy">
         <option value="nombre">Nombre</option>
         <option value="correo">Correo</option>
         <option value="ciudad">Ciudad</option>
         <option value="Estado">Estado</option>
     </select> */}
            </form>
         </>
      )
   }
}