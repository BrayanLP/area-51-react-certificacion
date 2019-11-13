import React, { Component } from 'react'
import User from './User'
import UserList from './UserList'

const data = [{
    name: 'BrayanLP',
    email: 'brayansystemlp@gmail.com',
    image: 'https://prueba.img',
    location: {
        state: 'Lima',
        city: 'Lima',
        street: 'Miraflores'
    }
}]
const API = "https://randomuser.me/api/?results=50"
class UserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: [],
            data: []
        }
    }
    componentDidMount() {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                const { results } = data
                this.setState({ data: results, search: results })
            })
    }
    handleKeyPress(event) {
        // const { target } = event
        const { data } = this.state
        if (event.key === 'Enter') {

            const filter = data.filter((val) => {
                return val.name.first.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
            })
            this.setState({ search: filter })
        }
    }
    render() {
        const { search } = this.state
        return (
            <>
                <input className="search"
                    placeholder="Ingresar nombre"
                    name="searchText" type="text"
                    autoComplete={'off'}
                    onKeyPress={(e) => this.handleKeyPress(e)}
                // onChange={(e) => console.log(e.target.value)}
                ></input>
                {/* <select name="searchBy">
                    <option value="nombre">Nombre</option>
                    <option value="correo">Correo</option>
                    <option value="ciudad">Ciudad</option>
                    <option value="Estado">Estado</option>
                </select> */}
                <UserList data={search}></UserList>
            </>

        )
    }
}
export default UserComponent