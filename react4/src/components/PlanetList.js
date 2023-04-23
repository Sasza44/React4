import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function PlanetList({planetInfo}){

    const [planetNumber, setPlanetNumber] = useState(0); // хук, який вказує номер обраної планети
    //console.log(planetInfo[0]);

    return(
        <Container>
            <Row>
                <Col md='6'>
                    <ul className='planet_data list'>
                        {planetInfo.map(item =>
                            <li onClick={() => {setPlanetNumber(planetInfo.indexOf(item))}} className='planet_data_item list_item' key={item.name}>{item.name}</li>)}
                    </ul>
                </Col>
                <Col md='6'>
                    <div className="planet person_details">
                        <div className="planet_picture"></div>
                        <div className="planet_information">
                            {planetInfo[planetNumber].name}
                            <ul className='planet_data'>
                                <li className='planet_data_item'>{planetInfo[planetNumber].population}</li>
                                <hr></hr>
                                <li className='planet_data_item'>Rotation period {planetInfo[planetNumber].rotation_period}</li>
                                <hr></hr>
                                <li className='planet_data_item'> Diameter {planetInfo[planetNumber].diameter}</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PlanetList;