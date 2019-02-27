import React from 'react'

class Pet extends React.Component {
  gender = () => {
    return this.props.pet.gender === "male" ? '♀ ' : '♂ ';
  }

  adopted = () => {
    return this.props.pet.isAdopted === false?
    <div className="extra content">
      <button className="ui disabled button">Already adopted</button>
      <button className="ui primary button" onClick={() => this.props.adopt(this.props.pet)}>Adopt pet</button>
    </div>
    :
    <div className="extra content">
      <button className="ui primary button">Already adopted</button>
      <button className="ui disabled button">Adopt pet</button>
    </div>
  }

  render() {
    const {name, type, age, weight} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.gender()}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        {this.adopted()}
      </div>
    )
  }
}

export default Pet
