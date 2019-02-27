import React, { Component } from "react"

class Search extends Component {
  render() {
    return (
      <input type="text" value={this.props.searchInput} onChange={this.props.searching} />
    )
  }
}

export default Search;
