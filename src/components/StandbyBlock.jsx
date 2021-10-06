import React, { useState, useEffect} from 'react';
import MatchBlock from './MatchBlock.jsx';


function StandbyBlock (props) {
  const [standbyPlayers, setStandbyPlayers] = useState(props.players);
  const [statusFunction, setStatusFunction] = useState(props.statusFunc);

  useEffect(() => {
    setStandbyPlayers(props.players)
    setStatusFunction(props.statusFunc);
}, [props.players, props.statusFunc])

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
          statusFunc={statusFunction}
          idx={player[3]}
        />)
        })
      }
    </div>
    
  );
}



export default StandbyBlock; 