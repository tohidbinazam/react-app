import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TbAdmin = () => {

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
          <Row className='justify-content-center'>
            <Col md={11}>
              <Table striped bordered hover variant='dark'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Skill</th>
                    <th>Gender</th>
                    <th>Number</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    devs.map((data, index) =>
                        <tr>
                          <td>{ index + 1 }</td>
                          <td>{ data.fiName } { data.laName }</td>
                          <td>{ data.email }</td>
                          <td>{ data.uName }</td>
                          <td>{ data.skill }</td>
                          <td>{ data.gender }</td>
                          <td>{ data.number }</td>
                          <td>
                            <img style={{ width: '40px', objectFit:'cover' }} src={ data.photo } alt=''/>
                          </td>
                          <td>
                            <Link to={ `/${data.uName}` } className='btn btn-primary btn-sm'><i className='bx bx-show' ></i> View</Link>&nbsp;
                            <Button variant='warning' className='btn-sm'><i className='bx bx-edit' ></i> Edit</Button>&nbsp;
                            <Button onClick={ () => handleDelete(data.id) } variant='danger' className='btn-sm'><i className='bx bx-trash' ></i> Delete</Button>
                          </td>
                        </tr>
                      )
                  }
                  
                </tbody>
              </Table>        
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default TbAdmin;