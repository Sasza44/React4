import React, {useState} from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap';
import './Header.css';
import PeopleList from './PeopleList';

function Header({ buttonPeople, buttonPlanets, buttonStarships }) {

  // функції, які виконуються при натисканні кнопок верхнього меню
  function getPeopleList(){
    buttonPeople(true);
    //buttonPlanets(false);
    //buttonStarships(false);
  }
  function getPlanetList(){
    //buttonPeople(false);
    buttonPlanets(true);
    //buttonStarships(false);
  }
  function getStarshipList(){
    //buttonPeople(false);
    //buttonPlanets(false);
    buttonStarships(true);
  }
  return (
    <>
      <Navbar className="menu" expand="sm" bg="dark" variant="dark">
        <Navbar.Brand className="brand">Star DB</Navbar.Brand>
        <Nav>
          <Button onClick={getPeopleList} className="header_button" variant="dark">People</Button>
          <Button onClick={getPlanetList} className="header_button" variant="dark">Planets</Button>
          <Button onClick={getStarshipList} className="header_button" variant="dark">Starships</Button>
        </Nav>
      </Navbar>
    </>
  );
}
  
export default Header;