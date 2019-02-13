import React from "react";

class Home extends React.Component {
  state = {
    gameInstance: null
  }
  componentDidMount = () => {
    this.setState({
      gameInstance: window.UnityLoader.instantiate("gameContainer", "./content/games/Build/HotDog.json", { onProgress: window.UnityProgress })
    })
  }
  handleClick = () => {
    this.state.gameInstance.SetFullscreen(1);
  }

  render = () => (
    <div className="webgl-content">
      <div id="gameContainer" ></div>
      <div className="footer">
        <div className="webgl-logo"></div>
        <div className="fullscreen" onClick={this.handleClick}></div>
        <div className="title">Word Typing Game</div>
      </div>
    </div>
  )
}

export default Home;
