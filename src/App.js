import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://api.smash.gg/gql/alpha',
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      method: 'post',
      data: {
        query: `
            query TournamentsByCountry {
              tournaments(query: {
                perPage: 50
                filter: {
                  countryCode: "US"
                  addrState: "OR"
                  upcoming: false
                }
              }) {
                nodes {
                  id
                  name
                }
              }
            }
          `
      }
    }).then((result) => {
      console.log(result.data.data.tournaments.nodes)
      setTournaments(result.data.data.tournaments.nodes)
      console.log(tournaments)
    });
  },[]);

  
  

  return (
    <div className="App">
      {
        tournaments.map((tournament ) => {
          (<p>{tournament.name}</p>)

        })
      }
    </div>
    
  );
}

export default App;
