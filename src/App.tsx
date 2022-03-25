import React from 'react';

import MapViewContainer from './components/MapViewContainer';

const App: React.FC = () => {
  return (
    <div style={{ zIndex: 0, height: '100%', width: '100%' }}>
      <MapViewContainer />
    </div>
  );
};

export default App;
