import React, { Component } from "react";
import Helment from "react-helmet";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Helment>
          <title>Home</title>
        </Helment>
        <div>Hola mundo</div>
      </div>
    );
  }
}

export default App;
