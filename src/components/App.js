import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      test: [],
      pets: [],
      filterPets: [],
      filters: {
        type: 'all'
      },
      searchInput: ""
    }
  }

  searching = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  onChangeType = obj => {  // need to pass this into filter
    let url;
    obj !== "all" ? url = `/api/pets?type=${obj}` : url = `/api/pets`
    
    fetch(url)
    .then(res => res.json())
    .then(pet => {
      this.setState({
        filterPets: pet,
        filters: {
          type: obj
        }
      })
    })
  }

  onFindPetsClick = () => { // this is also for the Filter to callback
    console.log("hiiiii") // oops i did this on onChangeType
  }

  componentDidMount = () => {
    fetch("/api/pets")
    .then(res => res.json())
    .then(allPets => {
      this.setState({
        pets: allPets,
        filterPets: allPets
      })
    })
  }

  adopt = pet => {
    console.log("tryna adopt", pet.name)
    // pet.isAdopted = true;
    const adopt = this.state.filterPets.map(animal => {
      if(animal.id === pet.id) {
        pet.isAdopted = true
        return pet
      }
      return animal
    })

    this.setState({
      filterPets: adopt
    })
  }

  searchingForPet = () => {
    const showPet =  this.state.filterPets.filter(pet => {
      return pet.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })

    return <PetBrowser pets={showPet} adopt={this.adopt} />
  }

  render() {
    console.log("setting state:", this.state.searchInput)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} searching={this.searching} searchInput={this.searchInput}/>
            </div>
            <div className="twelve wide column">
              {this.searchingForPet()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
