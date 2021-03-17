import React from 'react';
import Abir from './ProfilePhoto.jpg'
import Yoda from './yoda.jpg'
import './pf.css';
const ProfilePhoto = () => {
  return (

    <div className="container">
    <img src={Abir} alt="Abir" className="image" />
    <div className="overlay">
      <div className="txt"> <img src={Yoda} alt="Yoda"  /> </div>
    </div>
  </div>
  
  );
 };
export default ProfilePhoto
