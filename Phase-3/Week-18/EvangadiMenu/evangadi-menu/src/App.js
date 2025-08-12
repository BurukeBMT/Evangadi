import React from 'react';
import './App.css';

// ...existing code...

import './commonResource/CSS/style.css';
import FoodItem from './FoodItem';
import foodData from './commonResource/JS/data';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="menu-title">Evangadi Menu</h1>
        <div className="food-list">
          {foodData.map((item, idx) => (
            <FoodItem
              key={idx}
              title={item.title}
              img={item.img}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
