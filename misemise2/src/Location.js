import React from 'react';

const Location = () => {
  const succesLocation = (position) => {
    // const { latitude, longitude } = position.coords;
    // getWeather(latitude, longitude);
  };

  const errorLocation = () => {
    console.log('Sorry, no position available.');
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(succesLocation, errorLocation);
  };

  const weatherInit = () => {
    getLocation();
  };

  weatherInit();
  return <div></div>;
};

export default Location;
