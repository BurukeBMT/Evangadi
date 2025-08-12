import {Component} from "react";
import FoodItem from "./FoodItem";
import menu from "../commonResources/JS/data";
import "../commonResources/CSS/style.css";

class MenuContainer extends Component {
  render() {
    return (
      <div className="foods-container">
        {menu.map((item) => (
          <FoodItem
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            desc={item.desc}
          />
        ))}
      </div>
    );
  }
}

export default MenuContainer;
