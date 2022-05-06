import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = () => {

    const [devs, setDevs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5050/devs').then(res => {
            setDevs(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, [devs])


  return (
    <div>
        <Container>
            <Row>
                {
                    devs.map(data => 
                        <Col md={3}>
                            <Card className='shadow-sm my-3' border='primary'>
                                <Card.Img src={data.photo} />
                                <Card.Body>
                                    <Card.Title>{ data.fiName } { data.laName }</Card.Title>
                                    <Card.Text>{ data.skill } { data.status }</Card.Text>
                                    <Link to={`/${data.uName}`} className='btn btn-primary'>View Profile</Link>
                                </Card.Body>    
                            </Card>
                        </Col>
                    )
                } 
            </Row>
        </Container>
    </div>
  )
}

export default Team