import React from "react";
import MenuContainer from "./components/MenuContainer";


class App extends React.Component {
  render() {
    return (
      <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
        </header>
          <MenuContainer />
      </div>
    );
  }
}
export default App;