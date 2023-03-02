import React, { FC } from 'react';

export const NotFound: FC = () => {
  return (
    <div className="not-found">
      <img src="images/404.png" />
      <p>Oops! Invalid location :/</p>
    </div>
  );
};
