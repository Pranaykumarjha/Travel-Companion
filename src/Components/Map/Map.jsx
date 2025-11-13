import React from 'react';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles';

const Map = () => {
  const classes = useStyles();
  const coordinates = { lat: 28.6139, lng: 77.2090 };

  // Access the API key from .env
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        options={{ disableDefaultUI: true, zoomControl: true }}
      />
    </div>
  );
};

export default Map;
