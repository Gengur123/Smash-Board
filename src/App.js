import React from 'react';
import PlayingBlock from './components/PlayingBlock';
import StandbyBlock from './components/StandbyBlock';
import DqBlock from './components/DqBlock';

function App() {

  return (
    <React.Fragment>
      <StandbyBlock/>
      <PlayingBlock/>
      <DqBlock/>
    </React.Fragment>
    
  );
}

export default App;
