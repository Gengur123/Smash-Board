import React, { useState, useEffect} from 'react';
import MatchBlock from './MatchBlock.jsx';


function StandbyBlock (props) {

  console.log("PLAYER LIST APPJS")
  console.log(props.players)
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
        />)
        })
      }
    </div>
    
  );
}



export default StandbyBlock; 