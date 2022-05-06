
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddDevs.css'

const AddDevs = () => {

    // Form input state
    const [input, setInput] = useState({
        id : '',
        fiName : '',
        laName : '',
        email : '',
        photo : '',
        uName : '',
        number : '',
        birth : '',
        gender : '',
        location : '',
        webLink : '',
        fb : '',
        tw : '',
        lind : '',
        ins : '',
        whatsApp : '',
        tele : '',
        skill : '',
        color : '',
        status : '',
        webName : '',
        self : ''
    });

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5050/devs', input).then(() => {
        setInput({
        id : '',
        fiName : '',
        laName : '',
        email : '',
        photo : '',
        uName : '',
        number : '',
        birth : '',
        gender : '',
        location : '',
        webLink : '',
        fb : '',
        tw : '',
        lind : '',
        ins : '',
        whatsApp : '',
        tele : '',
        skill : '',
        color : '',
        status : '',
        webName : '',
        self : ''
    })}).catch(error => {
        console.log(error)
    })}
    

  return (
    <div className='background'>
        <Container>
            <Row className='justify-content-center'>
                <Col md='8'>
                    <Card className='my-5'>
                        <Card.Header><h3>Add New Developer</h3></Card.Header>
                        <Card.Body>
                            <Form onSubmit={ handleSubmit }>
                                <h4 className='my-2'>Basic Information</h4>
                                <Row>
                                    <Col>
                                        <Form.Group className='my-2' controlId='firstName'>
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, fiName : e.target.value}) } value={ input.fiName } type='text' placeholder='Enter first name'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='my-2' controlId='lastName'>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, laName : e.target.value}) } value={ input.laName } type='text' placeholder='Enter last name'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className='my-3' controlId='emailAddress'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control onChange={ e => setInput({...input, email : e.target.value}) } value={ input.email } type='email' placeholder='Enter your email address'></Form.Control>
                                </Form.Group>
                                <Form.Group className='my-3' controlId='photo'>
                                    <Form.Label>Photo (link)</Form.Label>
                                    <Form.Control onChange={ e => setInput({...input, photo : e.target.value}) } value={ input.photo } type='url' placeholder='Give your photo link'></Form.Control>
                                </Form.Group>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='Username'>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, uName : e.target.value}) } value={ input.uName } type='text' placeholder='Enter username'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='phoneNumber'>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, number : e.target.value}) } value={ input.number } type='number' placeholder='Enter your phone number'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='birthDay'>
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, birth : e.target.value}) } value={ input.birth } type='date'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2'>
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Check onChange={ e => setInput({...input, gender : e.target.value}) } label="Male" id='Male'name='gender' type='radio' value='Male' />
                                            <Form.Check onChange={ e => setInput({...input, gender : e.target.value}) } label="Female" id='Female' name='gender' type='radio' value='Female' />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='location'>
                                            <Form.Label>location</Form.Label>
                                            <Form.Select onChange={ e => setInput({...input, location : e.target.value}) } value={ input.location }>
                                                <option>Select your location</option>
                                                <option value='Dhaka'>Dhaka</option>
                                                <option value='Khulna'>Khulna</option>
                                                <option value='Rajshahi'>Rajshahi</option>
                                                <option value='Barisal'>Barisal</option>
                                                <option value='Chittagong'>Chittagong</option>
                                                <option value='Rangpur'>Rangpur</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='website'>
                                            <Form.Label>Website</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, webLink : e.target.value}) } value={ input.webLink } type='url' placeholder='Your website link'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <h4 className='my-2'>Social Media Profiles</h4>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='facebook'>
                                            <Form.Label>Facebook</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, fb : e.target.value}) } value={ input.fb } type='url' placeholder='Facebook profile link'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='twitter'>
                                            <Form.Label>Twitter</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, tw : e.target.value}) } value={ input.tw } type='url' placeholder='Twitter profile link'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='linkedin'>
                                            <Form.Label>Linkedin</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, lind : e.target.value}) } value={ input.lind } type='url' placeholder='Linkedin profile link'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='instagram'>
                                            <Form.Label>Instagram</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, ins : e.target.value}) } value={ input.ins } type='url' placeholder='Instagram profile link'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='whatsApp'>
                                            <Form.Label>WhatsApp</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, whatsApp : e.target.value}) } value={ input.whatsApp } type='number' placeholder='Your WhatsApp number'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='telegram'>
                                            <Form.Label>Telegram</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, tele : e.target.value}) } value={ input.tele } type='number' placeholder='Your Telegram number'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <h4 className='my-2'>Main Part</h4>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='skill'>
                                            <Form.Label>Your Skill</Form.Label>
                                            <Form.Select onChange={ e => setInput({...input, skill : e.target.value}) } value={ input.skill }>
                                                <option>Select your skill</option>
                                                <option value='Java'>Java</option>
                                                <option value='JavaScript'>JavaScript</option>
                                                <option value='Golang'>Golang</option>
                                                <option value='python'>python</option>
                                                <option value='Rust'>Rust</option>
                                                <option value='Ruby on Rails'>Ruby on Rails</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='color'>
                                            <Form.Label>Favorite color</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, color : e.target.value}) } value={ input.color } type='color'></Form.Control>
                                            <Form.Text>
                                                This color will be shown as your default profile color
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2'>
                                            <Form.Label>Status</Form.Label>
                                            <Form.Check onChange={ e => setInput({...input, status : e.target.value}) } label="Programer or," id='Programer'name='status' type='radio' value='Programer' />
                                            <Form.Check onChange={ e => setInput({...input, status : e.target.value}) } label="Developer" id='Developer' name='status' type='radio' value='Developer' />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='my-2' controlId='websiteName'>
                                            <Form.Label>Website Name</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, webName : e.target.value}) } value={ input.webName } type='text' placeholder='Enter Your website name'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className='my-3' controlId='about'>
                                            <Form.Label>About Your Self</Form.Label>
                                            <Form.Control onChange={ e => setInput({...input, self : e.target.value}) } value={ input.self } as='textarea' placeholder='Say something about yourself'></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Button className='w-100' type='reset' variant='danger'>Clear All</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button className='w-100' type='submit'>Add Now</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                      
                </Col>
            </Row>
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

export default AddDevs;