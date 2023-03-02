import React, { FC } from 'react';

export const Search: FC = () => {
  return (
    <div className="search-box">
      <i className="fa-solid fa-location-dot"></i>
      <input type="text" placeholder="Enter your location" />
      <button className="fa-solid fa-magnifying-glass"></button>
    </div>
  );
};
