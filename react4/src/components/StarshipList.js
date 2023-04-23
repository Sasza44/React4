import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function StarshipList({starshipInfo}){

    const [starshipNumber, setStarshipNumber] = useState(0); // хук, який вказує номер обраного космічного корабля
    //console.log(starshipInfo[0]);
    return(
        <Container>
            <Row>
                <Col md='6'>
                    <ul className='planet_data list'>
                        {starshipInfo.map(item =>
                            <li onClick={() => {setStarshipNumber(starshipInfo.indexOf(item))}} className='planet_data_item list_item' key={item.name}>{item.name}</li>)}
                    </ul>
                </Col>
                <Col md='6'>
                    <div className="planet person_details">
                        <div className="planet_picture starship_picture"></div>
                        <div className="planet_information">
                            {starshipInfo[starshipNumber].name}
                            <ul className='planet_data'>
                                <li className='planet_data_item'>Class {starshipInfo[starshipNumber].starship_class}</li>
                                <hr></hr>
                                <li className='planet_data_item'>Passengers {starshipInfo[starshipNumber].passengers}</li>
                                <hr></hr>
                                <li className='planet_data_item'>Cargo {starshipInfo[starshipNumber].cargo_capacity}</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default StarshipList;