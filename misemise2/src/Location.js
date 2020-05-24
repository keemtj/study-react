let lat = '';
let long = '';

const succesLocation = (position) => {
  const { latitude, longitude } = position.coords;
  lat = latitude;
  long = longitude;
};

const errorLocation = () => {
  console.log('Sorry, no position available.');
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(succesLocation, errorLocation);
};
const locationInit = () => {
  getLocation();
};

locationInit();

export { lat, long };
