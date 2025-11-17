import React from 'react';
import { useState, useEffect } from 'react';

import { CssBaseline } from '@mui/material';
import Header from './Components/Header/Header';
import List from './Components/List/List'; // optional
import Map from './Components/Map/Map';
import { getPlacesData } from './api';
const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });

  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (!bounds?.sw || !bounds?.ne) return;

    console.log('Fetching with:', bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });

  }, [coordinates, bounds]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* Main content */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* List (optional) */}
        <div style={{ width: '300px', borderRight: '1px solid #ccc' }}>
          <List places={places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
           childClicked={childClicked}
            isLoading={isLoading} />
        </div>

        {/* Map */}
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={places}
          setChildClicked={setChildClicked}
          type={type}
          rating={rating}
        />

      </div>
    </div>
  );
};

export default App;
