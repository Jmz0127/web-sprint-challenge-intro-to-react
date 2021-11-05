import './App.css';
import React, { useState, useEffect } from 'react'; //added useState and useEffect
import axios from 'axios'; //added axios as we are using that to get API info


// importing component
import Characters from './components/Characters';

function App() { //changed this to a function layout
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [peoples, setPeoples] = useState([]); //built out state properties

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => { //added useEffect hook here to fetch API 
    axios.get('https://swapi.dev/api/people')
    .then(resp => {
      console.log(resp);
      setPeoples(resp.data);
      // console.log(resp);
    })
    .catch(err => console.error(err))
  }, []) 


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters peoples={peoples}/> {/* added component flow here*/}
    </div>
  );
}

export default App;
