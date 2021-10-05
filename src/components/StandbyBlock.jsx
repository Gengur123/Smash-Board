import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchBlock from './MatchBlock.jsx';

function StandbyBlock () {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://api.smash.gg/gql/alpha',
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      method: 'post',
      data: {
        query: `
        query query2 {
          tournament(id: 320802) {
            events {
              sets(
                page: 1,
                perPage: 5
              ){
                nodes{
                  slots{
                    entrant{
                      name
                    }
                  }
                }
              }
            }
          }
        }
          `
      }
    }).then((result) => {
      const tempPlayers = []

      let event = result.data.data.tournament.events[0]
      console.log(event)
      for (let node of event.sets.nodes){
          let temp = []
          for (let slot of node.slots){
            if (slot.entrant){
              temp.push(slot.entrant.name)
            }
          }
          console.log(temp)
          tempPlayers.push(temp)
      }
      console.log(tempPlayers)
      setPlayers(tempPlayers)
    });
  },[]);

  
  

  return (
    <div className="App">
      <h1>Standby</h1>
      {
        players.map((player ) => {
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