import React from "react";
import "./App.css";
import Trending from "./components/Trending";
import Search from "./components/Search";

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Trending />
      </div>
    );
  }
}

export default App;
