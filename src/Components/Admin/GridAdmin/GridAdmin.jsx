import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GridAdmin = () => {

    // Devs state
    const [devs, setDevs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5050/devs').then(res => {
            setDevs(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, [devs])

    // Delete devs handler
    const handleDelete = (id) => {
      axios.delete(`http://localhost:5050/devs/${id}`)
    }
  return (
    <div>
        <Container>
            <Row>
                {
                    devs.map(data => 
                        <Col md={4}>
                            <Card className='shadow-sm my-3'>
                                <Row className='g-0'>
                                    <Col md={6}>
                                        <img style={{ width : '100%', objectFit : 'cover'}} src={ data.photo } alt="" />
                                    </Col>
                                    <Col md={6}>
                                        <Card className='h-100'>
                                            <Card.Body>
                                                <Card.Title>{ data.fiName } { data.laNmae }</Card.Title>
                                                <h6>{ data.skill } { data.status }</h6>
                                                <h6>{ data.email }</h6>
                                                <h6>{ data.number }</h6>
                                                <h6>{ data.gander }</h6>
                                                <h6>{ data.uName }</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>   
                                </Row> 
                                <Card.Footer className='d-flex justify-content-between'>
                                    <Link className='btn btn-primary' to={ `/${ data.uName }` }>View info</Link>
                                    <Button variant='warning'>Edit Data</Button>
                                    <Button onClick={ () => handleDelete(data.id) } variant='danger'>Delete Profile</Button>
                                </Card.Footer>
                            </Card>             
                        </Col>
                    )
                }
            </Row>
        </Container>
    </div>
  )
}

export default GridAdmin