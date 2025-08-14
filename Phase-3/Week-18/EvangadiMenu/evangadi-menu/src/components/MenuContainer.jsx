import menu from "../commonResources/JS/data";
import "../commonResources/CSS/style.css";
import "../assets/menuCard.css";
import React, { useState } from "react";


function MenuContainer({ menu }) {
  const [showMoreArr, setShowMoreArr] = useState(Array(menu.length).fill(false));
  
  const handleToggle = idx => {
    setShowMoreArr(arr => arr.map((v, i) => i === idx ? !v : v));
  };
  return (
    <>
      
      <div className="foods-container">
        {menu.map((item, idx) => (
          <div className="menu-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <span className="price">${item.price}</span>
            <p className={showMoreArr[idx] ? "show-more" : ""}>
              {showMoreArr[idx] ? item.desc : `${item.desc.substring(0, 120)}...`}
            </p>
            <button className={showMoreArr[idx] ? "active" : ""} onClick={() => handleToggle(idx)}>
              {showMoreArr[idx] ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function App() {
  return <MenuContainer menu={menu} />;
}

export default App;
