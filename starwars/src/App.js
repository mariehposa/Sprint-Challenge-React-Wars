import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Profile from './components/StarwarsProfile/starwarsProfile';


const starWarApi = 'https://swapi.co/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starwarState, setStarwarState] = useState();

  useEffect(() =>{
    axios.get(starWarApi)
      .then((response) =>{
        console.log(response.data);
        setStarwarState(response.data)
      })
      .catch((error) =>{
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Profile/>
    </div>
  );
}

export default App;
