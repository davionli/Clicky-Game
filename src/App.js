import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
const Characters = require( "./Character.json");


class App extends Component {
  state = {
    characters: Characters,
    clickedArr: [],
    score: 0,
    highestScore: 0
  }

  count = id => {
    var curr = this.state.characters;
    if (this.state.clickedArr.indexOf(id) === -1) {
        // console.log("not yet clicked");
        var tempArr = this.state.clickedArr;
        tempArr.push(id);
        this.setState({clickedArr: tempArr});
        this.setState({
          score: this.state.score + 1,
          highestScore: Math.max(this.state.score + 1, this.state.highestScore)
        });
        for (var i = curr.length-1; i >=0; i--) {
          var index = Math.floor(Math.random()*(i+1));
          if (i !== index) {
            var temp = curr[i];
            curr[i] = curr[index];
            curr[index] = temp;
          }
        }
        this.setState({characters: curr});
        
    }
    else {
      this.setState({score: 0});
      this.setState({clickedArr: []});
      // console.log("clicked");
    }
    

  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Clicky Game
          </a>
          <span className="text-center">
            <h2>Click an image to begin!</h2>
          </span>

          <span>
            <h5>Score: {this.state.score}</h5>
            <h5>highScore: {this.state.highestScore}</h5>
          </span>
        </nav>
        <div className="container d-flex flex-row flex-wrap">
          {this.state.characters.map(e => <CharacterCard image={e.image} id={e.id} click={this.count}/>) } 

        </div>

      </div>
    )
  }
}

export default App;
