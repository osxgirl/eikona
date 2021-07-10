import React, {Component} from "react"

export default class GifList extends Component {
  constructor(props) {
    super()
    console.log(props)
    this.gifs = props.gifs.map(gifData=> <Gif data={gifData}/>)
  }
  render() {
    return(
      <ul>
        <li>{this.gifs}</li>
      </ul>
    )
  }
}

class Gif extends Component {
  render() {
    return(
      <img src={this.props.data.images.original.url}
      width={this.props.data.images.original.width}
        height={this.props.data.images.original.height}
           alt={this.props.data.images.original.alt}
      />
    )
  }
}
