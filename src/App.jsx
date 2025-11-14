import React from 'react';
import {useState , useEffect } from 'react';

import { CssBaseline } from '@mui/material';
import Header from './Components/Header/Header';
import List from './Components/List/List'; // optional
import Map from './Components/Map/Map';
import { getPlacesData } from './api';
const App = () => {
  const [places, setPlaces] = useState([]);
  const[coordinates, setCoordinates]= useState({lat: 28.6139, lng: 77.2090});
  const[bounds, setBounds]= useState(null);
  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
   
  }, [])
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* Main content */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* List (optional) */}
        <div style={{ width: '300px', borderRight: '1px solid #ccc' }}>
          <List />
        </div>

        {/* Map */}
        <Map
        setCoordinates={ setCoordinates}
        setBounds={ setBounds }
        coordinates={ coordinates} />
      </div>
    </div>
  );
};

export default App;
