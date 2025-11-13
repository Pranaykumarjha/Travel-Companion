import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  mapContainer: {
    flex: 1,           // Fill remaining space in parent flex container
    width: '100%',      // Full width
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
    },
  },
  pointer: {
    cursor: 'pointer',
  },
}));
