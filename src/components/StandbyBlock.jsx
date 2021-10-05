import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
          for (let slot of node.slots){
            if (slot.entrant){
              tempPlayers.push(slot.entrant.name)
            }
          }
      }
      setPlayers(tempPlayers)
    });
  },[]);

  
  

  return (
    <div className="App">
      {
        players.map((player ) => {
        return (<p>{player}</p>)
        })
      }
    </div>
    
  );
}



export default StandbyBlock; 