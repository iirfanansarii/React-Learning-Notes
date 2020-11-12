import "./App.css";
import { Component } from "react";

import {CardList} from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
     monsters:[]
    };
  }

  /* component life cycle method */
  componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response =>response.json())
  .then(users => this.setState({ monsters:users }));
  
}

/* map is a mehtod which iterate all those method inside an array eg:monsters */
/* render is a method inside compoenent so when we extends react components method we get render method */
  render() {
    return (
      <div className="App">
        <CardList name="bakait">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
