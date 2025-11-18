import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import mapStyles from "./mapStyles";
import { Paper, Typography, Rating } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

const Map = ({ setCoordinates, setBounds, coordinates, places,setChildClicked,weatherData }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  // const [childClicked, setchildClicked] = useState(null);

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        options={{ disableDefaultUI: true, zoomControl: true,styles: mapStyles  }}

      
        onChildClick={(child) => setChildClicked(child)}

        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place, i) => (
          <div
            key={i}
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>

                <img
                  className={classes.pointer}
                  src={
                    place?.photo?.images?.large?.url ||
                    "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={place.name}
                />

                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img height={100} src ={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather" />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
