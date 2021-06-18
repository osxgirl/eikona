import React, {Component} from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends Component {

  state = {
    gifResults: null
  }

  fetchGifsWithSearch = (string) => {
    this.setState({gifResults: null})
    fetch(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=UGA1BxGc4geRI5gPfyJ4TLoZ4XiOAuOe`)
    .then(resp=>resp.json()).then(jsons=> this.setState({gifResults: jsons.data.slice(0, 3)}))
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifsWithSearch={this.fetchGifsWithSearch} />
        {(this.state.gifResults) ? <GifList gifs={this.state.gifResults}/> : null }
      </div>
    )
  }
}

