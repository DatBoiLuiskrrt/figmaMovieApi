import React from "react";
import "./App.css";
import Trending from "./components/Trending";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
        <div className="container-trending">
          <Trending />
        </div>
      </div>
    );
  }
}

export default App;
