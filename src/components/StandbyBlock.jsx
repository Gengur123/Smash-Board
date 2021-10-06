import React, { useState, useEffect} from 'react';
import MatchBlock from './MatchBlock.jsx';


function StandbyBlock (props) {
  const [standbyPlayers, setStandbyPlayers] = useState(props.players);

  useEffect(() => {
    setStandbyPlayers(props.players);
  }, [props.players])
  
  return (
    <div className="App" id="standby">
      <h1>Standby</h1>
      {
        standbyPlayers.map((player ) => {
        return (<MatchBlock
          p1={player[0]}
          p2={player[1]}
          block={'S'}
          status={player[2]}
        />)
        })
      }
    </div>
    
  );
}



export default StandbyBlock; 