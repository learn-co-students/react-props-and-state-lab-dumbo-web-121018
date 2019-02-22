import React from 'react'

class Pet extends React.Component {
  genderSymbol(){
    if(this.props.pet){
      return (this.props.pet.gender === "male") ? "♂" : "♀"
    }
  }

  adoptionButtons(){
    if(this.props.pet){
      return (this.props.pet.isAdopted === true) ?
      <button className="ui disabled button">Already adopted</button> :
      <button onClick={this.props.onAdoptPet} data-id={this.props.pet.id} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
      return (
        <div className="card">
          <div className="content">
            <a className="header">
              {this.genderSymbol()}
              {this.props.pet && this.props.pet.name}
            </a>
            <div className="meta">
              <span className="date">{this.props.pet && this.props.pet.type}</span>
            </div>
            <div className="description">
              <p>Age: {this.props.pet && this.props.pet.age}</p>
              <p>Weight: {this.props.pet && this.props.pet.weight}</p>
            </div>
          </div>
          <div className="extra content">
            {this.adoptionButtons()}
          </div>
        </div>
      )
    }
}

export default Pet
