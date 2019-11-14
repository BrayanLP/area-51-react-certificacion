import React, { Component } from 'react'
import User from './User'
import UserList from './UserList'
import SearchUser from './SearchUser'
import fuzzysearch from 'fuzzysearch'

const API = "https://randomuser.me/api/?results=50"
class UserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            data: [],
            filterUsers: []
        }
        this.handleFilter = this.handleFilter.bind(this)
    }
    componentDidMount() {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                const { results } = data
                this.setState({ data: results, users: results })
            })
    }
    handleFilter(value) {
        event.preventDefault()
        // const { target } = event
        console.log(value)
        const { users } = this.state
        const filterUsers = users.filter(({ name, email }) => {
            const { first, last } = name
            return (
                fuzzysearch(value.toLowerCase(), first.toLowerCase()) ||
                fuzzysearch(value.toLowerCase(), last.toLowerCase()) ||
                fuzzysearch(value.toLowerCase(), email.toLowerCase())
            )
        })
        this.setState({
            filterUsers
        })

    }

    render() {
        const { users, filterUsers } = this.state
        const currentUsers = filterUsers.length ? filterUsers : users
        return (
            <>
                <SearchUser handleFilter={this.handleFilter}></SearchUser>
                <UserList data={currentUsers}></UserList>
            </>

        )
    }
}
export default UserComponent