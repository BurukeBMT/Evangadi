import React from "react";
// import "./commonResource/style.css";
import MenuContainer from "./components/MenuContainer";


class App extends React.Component {
  render() {
    return (
      <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        
          <MenuContainer /> {/* Render MenuContainer component */}
       
      </div>
    );
  }
}
export default App;