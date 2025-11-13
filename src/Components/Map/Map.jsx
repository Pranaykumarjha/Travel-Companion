import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import useStyles from './styles';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)'); // fixed

  const coordinates = { lat: 28.6139, lng: 77.2090 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB8OA9v4LRgfmbywlw1NCwuqSZYGREl5dE' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        options={{ disableDefaultUI: true, zoomControl: true }}
      />
    </div>
  );
};

export default Map;
