import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, age, occupation, profileImage }) => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src={profileImage} alt={name} className="profile-image" />
      </div>
      <div className="profile-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Occupation:</strong> {occupation}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
