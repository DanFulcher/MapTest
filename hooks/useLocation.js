import Geolocation from '@react-native-community/geolocation';

export default () => {
  const getLocation = () => {
    console.log('test');
    // setUserLoc(Geolocation.getCurrentPosition(info => console.log(info)));
    Geolocation.getCurrentPosition(info => console.log(info));
  };
  return getLocation;
};
