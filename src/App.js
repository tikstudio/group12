import React, {Component} from 'react';
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Filter from "./components/Filter";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Filter />
        <ToDoList />
      </div>
    );
  }
}

export default App;
