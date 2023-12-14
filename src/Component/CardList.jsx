import React from 'react';
import imgs from '../Images/Veg-img.png'

const FoodCard = ({ foodData }) => {
  const { image, price, name, description } = foodData;

  return (
    <div className="food-card">
      <img src={imgs} alt={name} className="food-image" />
      <div className="card-content">
        <div className="food-details">
          <h2 className="food-name">{name}</h2>
          <p className="food-description">{description}</p>
          <p className="food-price">${price}</p>
        </div>
        <div className="actions">
          <img src="like-icon.png" alt="Like" className="action-icon" />
          <img src="bucket-icon.png" alt="Bucket" className="action-icon" />
        </div>
      </div>
    </div>
  );
};

const CardList = ({ foodList }) => {
  return (
    <div className="food-card-list">
      {foodList.map((food, index) => (
        <FoodCard key={index} foodData={food} />
      ))}
    </div>
  );
};

export default CardList; 
