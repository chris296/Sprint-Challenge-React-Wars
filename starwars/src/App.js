import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PeopleCard from './components/Card';
import {Container, Row} from 'reactstrap';

const App = () => {
  const [people, setPeople] = useState ([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res.data.results);
      setPeople(res.data.results);
    })
    .catch(error=> {
      console.log('There was an error', error);
    })
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  console.log('this is results', people);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        <Row>
          {people.map(p => (
            <PeopleCard key={p.name} person={p} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
