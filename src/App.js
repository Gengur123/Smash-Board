import React from 'react';
import PlayingBlock from './components/PlayingBlock';
import StandbyBlock from './components/StandbyBlock';

function App() {

  return (
    <React.Fragment>
      <StandbyBlock/>
      <PlayingBlock/>
    </React.Fragment>
    
  );
}

export default App;
