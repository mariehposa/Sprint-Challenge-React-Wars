import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterRow from './components/StarwarsProfile/CharacterRow';
import styled from 'styled-components';

const StyledButton = styled.button`
   padding: 1.5rem;
   border-radius: 2rem;
   background: whitesmoke;
`

const starWarApi = 'https://swapi.co/api/people/';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starwarState, setStarwarState] = useState([]);
  const [url, setUrl] = useState(starWarApi)
  const [next, setNext] = useState("")

  useEffect(() =>{
    axios.get(url)
      .then((response) =>{
        //console.log(response.data);
        setStarwarState(response.data.results)
        setNext(response.data.next)
      })
      .catch((error) =>{
        //console.log(error);
      });
  }, [url]);

  function onClicked(newUrl){
    setUrl(newUrl)
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterRow characters={starwarState}/>
      <StyledButton onClick={() => onClicked(next)}>Next >></StyledButton>
    </div>
  );
}

export default App;
