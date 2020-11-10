import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
     monsters:[
       {
         name:'FrankStein',
         id:'abc'
       },
       {
         name:'Dracula',
         id:'bcd'
       },
       {
         name:'Zombie',
         id:'efg'
       }
     ]
    };
  }
/* map is a mehtod which iterate all those methos inside an array eg:monsters */
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => 
          <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
