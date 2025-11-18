import React from 'react';
import { useState, useEffect } from 'react';

import { CssBaseline } from '@mui/material';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
import { getPlacesData } from './api';
import { getWeatherData } from './api';
import { LoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]); 
  const [coordinates, setCoordinates] = useState({});
  const [filteredPlaces, setFilteredPlaces] = useState([]);
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
    const filtered = places.filter((place) => Number(place.rating) > Number(rating));
    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
    setIsLoading(true);
    if (!bounds?.sw || !bounds?.ne) return;
    getWeatherData(coordinates.lat, coordinates.lng).then((data) => {
      setWeatherData(data);
    });

    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data?.filter(place => place.name && place.num_reviews > 0));
     
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }

  }, [type, bounds]);

  return (
    
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <CssBaseline />

        <Header setCoordinates={setCoordinates} />

        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ width: '300px', borderRight: '1px solid #ccc' }}>
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
              childClicked={childClicked}
              isLoading={isLoading}
            />
          </div>

          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            type={type}
            rating={rating}
            weatherData={weatherData}
          />
        </div>
      </div>
    
  );
};

export default App;
