import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      String: "Hello Class Component",
    };
  }
/* below at setState the state is changin so when it happens we render  the components */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> {this.state.String}</p>
<button onClick={()=>this.setState({String:'Hello React Bhai'})}>Change Name</button>
   <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
        </header>
      </div>
    );
  }
}

export default App;
