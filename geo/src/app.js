import React from 'react'
import { render } from 'react-dom'
import { Container } from './containers/Container'
import UserComponent from './components/UserComponent'

const App = () => {
    return (
        <>
            <div className="app-wrapper">
                <h1>Lista de usuarios</h1>
            </div>
            <div className="app-wrapper">
                {/* <Container></Container> */}
                <UserComponent></UserComponent>
            </div>
        </>
    )
}

render(<App />, document.getElementById('root'))