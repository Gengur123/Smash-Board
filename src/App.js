import React, { useState, useEffect } from 'react';
import PlayingBlock from './components/PlayingBlock';
import StandbyBlock from './components/StandbyBlock';
import DqBlock from './components/DqBlock';
import NavBarBlock from './components/NavBarBlock';
import axios from 'axios';

function App() {

  const [players, setPlayers] = useState([]);
  const [change, setChange] = useState(0);

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
                perPage: 30
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
      let count = 0;
      console.log(event)
      for (let node of event.sets.nodes){
          let temp = []
          for (let slot of node.slots){
            if (slot.entrant){
              temp.push(slot.entrant.name)
            }
          }
          temp.push('S')
          temp.push(count)
          count++;
          console.log(temp)
          tempPlayers.push(temp)
      }
      console.log(tempPlayers)
      setPlayers(tempPlayers)
    });
  },[]);

  useEffect(() => {
    console.log("PLAYERS HAVE CHANGED")
  }, [change])

  let updateStatus = (idx, status) => {
    let p = players;
    console.log("UPDATE STATUS FUNCTION")
    console.log("Values: idx=" + idx + ", status=" + status)
    if(p.length !== 0){
      p[idx][2] = status;
      setPlayers(p);
      console.log(players)
      setChange(change + 1)
    }
  }

  return (
    <React.Fragment>
      <NavBarBlock/>
      <div class="row">
        <div class="column">
        <StandbyBlock players={players} statusFunc={() => () => updateStatus}/>
        </div>
        <div class="column">
        <PlayingBlock players={players} statusFunc={() => () => updateStatus}/>
        </div>
        <div class="column">
        <DqBlock players={players} statusFunc={() => () => updateStatus}/>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;
