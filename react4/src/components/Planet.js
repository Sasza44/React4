import React, { useEffect, useState } from 'react';
import './Planet.css';
import {peopleList} from './Header.js';

const planet_numbers = 10; // кількість планет
// обираємо номер планети за допомогою випадкового числа
function getRandomNumber() {
  return Math.floor(Math.random() * planet_numbers) + 1
}

function Planet() {
  const [start, setStart] = useState(false);                         // зміна планет(якщо false, то не змінюються)
  const [planetNumber, setPlanetNumber] = useState(getRandomNumber); // номер планети
  const [planetName, setPlanetName] = useState(undefined);           // назва 
  const [population, setPopulation] = useState(undefined);           // населення
  const [rotationPeriod, setRotationPeriod] = useState(undefined);   // період обертання
  const [diameter, setDiameter] = useState(undefined);               // діаметр

  // запит на сервер для отримання даних про обрану випадковим чином планету
  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${planetNumber}/`)
    .then(response => response.json())
    .then(json => {
      setPlanetName(json.name);
      setPopulation(json.population);
      setRotationPeriod(json.rotation_period);
      setDiameter(json.diameter);
    });
    setStart(true); // вказівка на запуск циклічного таймера зміни планет
  }, [planetNumber])

  useEffect(() => {
    setInterval(() => {setPlanetNumber(getRandomNumber)}, 10000)   // цикл 10 с зміни планет (номер випадковий)
  }, [start])

  return (
    <div className="planet">
      <div className="planet_picture"></div>
      <div className="planet_information">
        Planet Name: {planetName}
        <ul className='planet_data'>
          <li className='planet_data_item'>Population {population}</li>
          <hr></hr>
          <li className='planet_data_item'>Rotation period {rotationPeriod}</li>
          <hr></hr>
          <li className='planet_data_item'>Diameter {diameter}</li>
        </ul>
      </div>
    </div>
  );
}
  
export default Planet;