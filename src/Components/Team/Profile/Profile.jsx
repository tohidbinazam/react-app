import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Profile.css'

const Profile = () => {

    const { uName } = useParams()

    const [profile, setProfile] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5050/devs?uName=${uName}`).then(res => {
            setProfile(res.data[0])
        }).catch(error => {
            console.log(error);
        })
    }, [uName])
    
    

  return (
    <div>
        <Container>
            <Card border='primary' className='my-4'>
                <Row className="justify-content-center my-3">
                    <Col md={6}>
                        <Card className='shadow-sm'>
                            <Card.Body>
                                <h3>Hi, My name is { profile.fiName } { profile.laName }</h3>
                                <Card.Title>I am a { profile.skill } { profile.status }</Card.Title>
                                <Row className='d-flex justify-content-between mt-4'>
                                    <Col md={6}>
                                        <span>Location :</span>
                                        <Card.Title>Now, I live in { profile.status }</Card.Title>
                                    </Col >
                                    <Col md={6}>
                                        <span>Phone Number :</span>
                                        <Card.Title><a href={ `tel:${profile.number}` }>{ profile.number }</a></Card.Title>
                                    </Col>
                                    <Col md={12}>
                                        <span>Email :</span>
                                        <Card.Title>My email is <a href={ `mailto:${profile.email}` } target="_blank" rel="noopener noreferrer">{ profile.email }</a></Card.Title>
                                    </Col>
                                    <Col md={6}>
                                        <span>Gender :</span>
                                        <Card.Title>{ profile.gender }</Card.Title>
                                    </Col>
                                    <Col md={6}>
                                        <span>Date of Birth :</span>
                                        <Card.Title>{ profile.birth }</Card.Title>
                                    </Col>
                                    <Col md={12}>
                                        <span>Website :</span>
                                        <Card.Title>My website name is <a href={ profile.webLink } target="_blank" rel="noopener noreferrer">{ profile.webName }</a></Card.Title>
                                    </Col>
                                    <Col md={12}>
                                        <b>About Myself :</b>
                                        <Card.Text>{ profile.self }</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='text-center' md={4}>
                        <img className='rounded shadow mb-3' style={{ width: '350px', Height: '350px' }}  src={ profile.photo } alt=''/>
                        <h3>{ profile.fiName } { profile.laName }</h3>
                        <h5>{ profile.skill } { profile.status }</h5>
                        <div className="social-icons my-3">
                            <a href={ profile.fb } target='_blank' rel="noopener noreferrer"><i className='bx bxl-facebook' ></i></a>
                            <a href={ profile.tw } target='_blank' rel="noopener noreferrer"><i className='bx bxl-twitter' ></i></a>
                            <a href={ profile.lind } target='_blank' rel="noopener noreferrer"><i className='bx bxl-linkedin' ></i></a>
                            <a href={ profile.ins } target='_blank' rel="noopener noreferrer"><i className='bx bxl-instagram' ></i></a>
                            <a href={ `tel:${profile.whatsApp}` } ><i className='bx bxl-whatsapp' ></i></a>
                            <a href={ `tel:${profile.tele}` } ><i className='bx bxl-telegram' ></i></a>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Row className='text-center pb-3'>
                <Col>
                    <Link className='btn btn-primary' to='/'>All Profiles</Link> &nbsp;
                    <Link className='btn btn-warning' to='/admin'>Go to Admin</Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Profile