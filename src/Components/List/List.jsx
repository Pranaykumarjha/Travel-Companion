import React, { useState, useEffect, createRef } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box
} from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';

import {
  ContainerBox,
  LoadingBox,
  ListSx,
  FormControlSx,
  SelectEmptySx
} from './styles';

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  console.log({ childClicked });
  const [elRefs, setElRefs] = useState([]);

  // Create refs for scrolling/highlighting
  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <ContainerBox>
      {/* Title */}
      <Typography variant="h4" sx={{ mb: 3 }}>
        Food & Dining around you
      </Typography>

      {/* Loading */}
      {isLoading ? (
        <LoadingBox>
          <CircularProgress size="5rem" />
        </LoadingBox>
      ) : (
        <>
          {/* Filters */}
          <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
            <FormControl sx={FormControlSx}>
              <InputLabel>Type</InputLabel>
              <Select value={type} label="Type" onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                {/* <MenuItem value="hotels">Hotels</MenuItem> */}
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={FormControlSx}>
              <InputLabel>Rating</InputLabel>
              <Select
                value={rating}
                label="Rating"
                onChange={(e) => setRating(e.target.value)}
                sx={SelectEmptySx}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="3">Above 3.0</MenuItem>
                <MenuItem value="4">Above 4.0</MenuItem>
                <MenuItem value="4.5">Above 4.5</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* List */}
          <Grid container spacing={3} sx={ListSx}>
            {places?.map((place, i) => (
              <Grid key={i} item xs={12}>
                <div ref={elRefs[i]}>
                  <PlaceDetails
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={place}
                  />
                </div>
              </Grid>

            ))}
          </Grid>
        </>
      )}
    </ContainerBox>
  );
};

export default List;
