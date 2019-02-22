import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    this.onChange = this.onChange.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.clickDirector = this.clickDirector.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  componentWillMount(){
    this.fetchAllPets()
  }

  fetchAllPets(){
    fetch(`/api/pets`)
    .then(res => res.json())
    .then(pets => {this.setState({ pets })})
  }

  clickDirector(){
    this.state.filters.type === 'all' ? this.fetchAllPets() : this.onFindPetsClick();
  }

  onFindPetsClick(){
    fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(res => res.json())
    .then(pets => {this.setState({ pets })})
  }

  onChange(e){
    let newFilters = {}
    newFilters.type = e.target.value
    this.setState({
      filters: newFilters
    })
  }

  onAdoptPet(e){
    let pets = [...this.state.pets]
    let petToAdopt = pets.find(pet => {return pet.id === e.target.dataset.id})
    petToAdopt.isAdopted = !petToAdopt.isAdopted
    this.setState({ pets });
  }

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChange} filters={this.state.filters} onFindPetsClick={this.clickDirector}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
