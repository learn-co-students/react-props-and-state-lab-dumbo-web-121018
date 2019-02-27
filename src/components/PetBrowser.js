import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  createPetCard = () => {
    return this.props.pets.map(pet => {
      return <div className="ui cards"><Pet pet={pet} adopt={this.props.adopt}/></div>
    })
  }

  render() {
    return this.createPetCard()
  }
}

export default PetBrowser
