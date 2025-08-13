import React from "react";
import MenuContainer from "./components/MenuContainer";
import MenuHeader from "./components/MenuHeader";


class App extends React.Component {
  render() {
    return (
      <div className="all-container">
          <MenuHeader />
          <MenuContainer />
      </div>
    );
  }
}
export default App;