import React, { Component } from "react"

class Music extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src="DarthFaith.wav"></source>
        </audio>
      </div>
    )
  }
}
export default Music;