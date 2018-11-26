import React, { Component } from 'react'

import flats from './flats.jsx'
import FlatList from './flatList'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flats: flats,
      selectedFlat: null
    }
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
      </div>
    )
  }
}

export default App
