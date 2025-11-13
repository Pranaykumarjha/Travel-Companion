import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from './Components/Header/Header';
import List from './Components/List/List'; // optional
import Map from './Components/Map/Map';

const App = () => {
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
        <Map />
      </div>
    </div>
  );
};

export default App;
