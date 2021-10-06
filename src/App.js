import React, { useState, useEffect } from 'react';
import PlayingBlock from './components/PlayingBlock';
import StandbyBlock from './components/StandbyBlock';
import DqBlock from './components/DqBlock';
import NavBarBlock from './components/NavBarBlock';
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
              sets(
                page: 1,
                perPage: 10
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
          temp.push('S')
          console.log(temp)
          tempPlayers.push(temp)
      }
      console.log(tempPlayers)
      setPlayers(tempPlayers)
    });
  },[]);
  
  return (
    <React.Fragment>
      <NavBarBlock/>
      <div class="row">
        <div class="column">
        <StandbyBlock players={players}/>
        </div>
        <div class="column">
        <PlayingBlock players={players}/>
        </div>
        <div class="column">
        <DqBlock players={players}/>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;
