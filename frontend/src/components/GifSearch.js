import React, { Component } from "react"

export default class GifSearch extends Component {

  state = {
    searchValue: ""
  }

  handleSubmit = event=> {
    event.preventDefault()
    this.props.fetchGifsWithSearch(this.state.searchValue)
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="search" value={this.state.searchValue}
      onChange={event=> {
        this.setState({searchValue: event.target.value})
      }}/>
      <input type="submit" />
    </form>
    )
  }
}
