import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
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
      // console.log(result.data.data)
      // console.log(result.data.data.tournament)
      // console.log(result.data.data.tournament.events)
      for (let i = 0; i < result.data.data.tournament.events.length; i++){
        let event = result.data.data.tournament.events[i]
        // console.log(event)
        // console.log(event.phases)
        for (let phase of event.phases){
          // console.log(phase.sets)
          for (let nodes of phase.sets.nodes){
            // console.log(nodes)
            // console.log(nodes.slots)
              for (let slot of nodes.slots){
                if (slot.entrant){
                  tempPlayers.push(slot.entrant.name)
                  // console.log(slot.entrant.name)
                }
              }

          }
        }
        
      // setTournaments(result.data.data.tournaments.nodes)
      // console.log(tournaments)
      }
      setPlayers(tempPlayers)
      console.log(tempPlayers)
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

export default App;
