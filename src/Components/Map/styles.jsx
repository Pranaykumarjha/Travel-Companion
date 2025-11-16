import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  mapContainer: {
    height: '100%',          // Full screen height
    width: '100%',            // MUST be 100% or markers won’t show
    position: 'relative',
  },

  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -100%)',  // Correct anchor point
    zIndex: 1,
    cursor: 'pointer',
    '&:hover': {
      zIndex: 2,
    },
  },

  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '150px',
  },

  typography: {
    textAlign: 'center',
    fontWeight: 500,
  },

  pointer: {
    cursor: 'pointer',
    width: '100%',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
}));
