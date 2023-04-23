import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function PeopleList({peopleInfo}){
    
    const [personNumber, setPersonNumber] = useState(0); // хук, який вказує номер обраного персонажа
    //console.log(peopleInfo[0]);
    //console.log(personNumber);

    return(
        <Container>
            <Row>
                <Col lg='6'>
                    <ul className='planet_data list'>
                        {peopleInfo.map(item =>
                            <li onClick={() => {setPersonNumber(peopleInfo.indexOf(item))}} className='planet_data_item list_item' key={item.name}>{item.name}</li>)}
                    </ul>
                </Col>
                <Col lg='6'>
                    <div className="planet person_details">
                        {personNumber === 0 && <div className='planet_picture person_picture0'></div>}
                        {personNumber === 1 && <div className='planet_picture person_picture1'></div>}
                        {personNumber === 2 && <div className='planet_picture person_picture2'></div>}
                        {personNumber === 3 && <div className='planet_picture person_picture3'></div>}
                        {personNumber === 4 && <div className='planet_picture person_picture4'></div>}
                        {personNumber === 5 && <div className='planet_picture person_picture5'></div>}
                        {personNumber === 6 && <div className='planet_picture person_picture6'></div>}
                        {personNumber === 7 && <div className='planet_picture person_picture7'></div>}
                        {personNumber === 8 && <div className='planet_picture person_picture8'></div>}
                        {personNumber === 9 && <div className='planet_picture person_picture9'></div>}
                        <div className="planet_information">
                            {peopleInfo[personNumber].name}
                            <ul className='planet_data'>
                                <li className='planet_data_item'>Gender {peopleInfo[personNumber].gender}</li>
                                <hr></hr>
                                <li className='planet_data_item'>Birth Year {peopleInfo[personNumber].birth_year}</li>
                                <hr></hr>
                                <li className='planet_data_item'>Eye Color {peopleInfo[personNumber].eye_color}</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PeopleList;