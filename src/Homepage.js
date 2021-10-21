import React from 'react';
import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKET</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MEMS</h1>
            <span className="subTitle">SHOP NOW</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;