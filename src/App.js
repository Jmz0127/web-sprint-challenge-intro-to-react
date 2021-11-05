import React, { useState, useEffect } from 'react'; //added useState and useEffect
import './App.css';
import axios from 'axios'; //added axios as we are using that to get API info


// importing component
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState ([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(resp => {
      setPeople(resp.data.people);
    })
    .catch(err => console.error(err))
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character people={people}/>
    </div>
  );
}

export default App;
