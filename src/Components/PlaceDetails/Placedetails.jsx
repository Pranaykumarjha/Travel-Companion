// src/Components/PlaceDetails/PlaceDetails.jsx

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating
} from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import {
  chipStyle,
  subtitleStyle,
  spacingStyle
} from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <Card elevation={6}>
      {/* Image */}
      <CardMedia
        sx={{ height: 350 }}
        image={
          place.photo?.images?.large?.url ||
          'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={place.name}
      />

      <CardContent>
        {/* Title */}
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        {/* Rating */}
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && 's'}
          </Typography>
        </Box>

        {/* Price */}
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>

        {/* Ranking */}
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>

        {/* Awards */}
        {place?.awards?.map((award, i) => (
          <Box key={i} display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt="" />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {/* Cuisine */}
        {place?.cuisine?.map((cuisine, i) => (
          <Chip
            key={i}
            size="small"
            label={cuisine.name}
            sx={chipStyle}
          />
        ))}

        {/* Address */}
        {place.address && (
          <Typography variant="body2" color="textSecondary" sx={subtitleStyle}>
            <LocationOnIcon sx={{ mr: 1 }} />
            {place.address}
          </Typography>
        )}

        {/* Phone */}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" sx={spacingStyle}>
            <PhoneIcon sx={{ mr: 1 }} />
            {place.phone}
          </Typography>
        )}
      </CardContent>

      {/* Buttons */}
      <CardActions>
        {place.web_url && (
          <Button size="small" onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
        )}

        {place.website && (
          <Button size="small" onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
