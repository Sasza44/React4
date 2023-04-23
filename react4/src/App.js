import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Planet from './components/Planet.js';
import { Container, Row, Col } from 'react-bootstrap';
import PeopleList from './components/PeopleList.js';
import PlanetList from './components/PlanetList.js';
import StarshipList from './components/StarshipList.js';

//const people = undefined;
function App() {

  // стани, які вказують, яка кнопка верхнього меню натиснута останньою
  const [peopleList, setPeopleList] = useState(false);
  const [planetList, setPlanetList] = useState(false);
  const [starshipList, setStarshipList] = useState(false);

  const peopleProperties = useRef(undefined); // хук для зберігання інформації про персонажів
  const planetProperties = useRef(undefined); // хук для зберігання інформації про планети
  const starshipProperties = useRef(undefined); // хук для зберігання інформації про космічні кораблі

  // функції, передані з дочірнього компоненту <Header /> і виконуються при натисканні кнопок верхнього меню
  function getPeopleList(peopleList){
    setPeopleList(peopleList);
    setPlanetList(false);
    setStarshipList(false);
  }
  function getPlanetList(planetList){
    setPeopleList(false);
    setPlanetList(planetList);
    setStarshipList(false);
  }
  function getStarshipList(starshipList){
    setPeopleList(false);
    setPlanetList(false);
    setStarshipList(starshipList);
  }

  // запит на сервер для отримання даних про персонажів
  fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(json => {
      peopleProperties.current = json.results;
      //console.log(peopleProperties.current);
    })

  // запит на сервер для отримання даних про планети
  fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(json => {
      planetProperties.current = json.results;
      //console.log(planetProperties.current);
    })

  // запит на сервер для отримання даних про космічні кораблі
  fetch('https://swapi.dev/api/starships/')
    .then(response => response.json())
    .then(json => {
      starshipProperties.current = json.results;
      //console.log(starshipProperties.current);
    })
  

  return (
    <>
      <Header buttonPeople={getPeopleList} buttonPlanets={getPlanetList} buttonStarships={getStarshipList} />
      <Planet />
        {peopleList? <PeopleList peopleInfo={peopleProperties.current} />:
        (planetList? <PlanetList planetInfo={planetProperties.current} />:
        (starshipList? <StarshipList starshipInfo={starshipProperties.current} />: <></>))}
    </>
  );
}

export default App;