import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='shadow-sm'>
        <Container>
          <Row className='justify-content-between'>
            <Col md={6}>
              <div className="logo">
                <Link to="/"><img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/fiverr-logo-1.png" alt=""/></Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="menu">
                <ul className='d-flex justify-content-between m-0'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
                  <li><Link to="/add-devs">Add New Devs</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Header