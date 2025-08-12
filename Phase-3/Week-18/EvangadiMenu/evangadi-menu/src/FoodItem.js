import React, { Component } from 'react';
import './commonResource/CSS/style.css';

class FoodItem extends Component {
  render() {
    const { title, img, desc, price } = this.props;
    return (
      <div className="food-item">
        <img src={img} alt={title} className="food-image" />
        <h3 className="food-name">{title}</h3>
        <p className="food-description">{desc}</p>
        <p className="food-price">${price}</p>
      </div>
    );
  }
}

export default FoodItem;
