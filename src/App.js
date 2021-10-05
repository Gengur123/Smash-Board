import React from 'react';
import PlayingBlock from './components/PlayingBlock';
import StandbyBlock from './components/StandbyBlock';
import DqBlock from './components/DqBlock';
import NavBarBlock from './components/NavBarBlock'

function App() {

  return (
    <React.Fragment>
      <NavBarBlock/>
      <div class="row">
        <div class="column">
        <StandbyBlock/>
        </div>
        <div class="column">
        <PlayingBlock/>
        </div>
        <div class="column">
        <DqBlock/>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;
