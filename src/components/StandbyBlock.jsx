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
                phases {
                  sets {
                    nodes {
                      slots {
                        entrant {
                          name
                        }
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
      for (let i = 0; i < result.data.data.tournament.events.length; i++){
        let event = result.data.data.tournament.events[i]
        for (let phase of event.phases){
          for (let nodes of phase.sets.nodes){
              for (let slot of nodes.slots){
                if (slot.entrant){
                  tempPlayers.push(slot.entrant.name)
                }
              }
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