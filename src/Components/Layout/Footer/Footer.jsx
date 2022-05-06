import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='bg-dark'>
        <Container>
            <Row>
                <Col md={12}>
                    <h6 className='text-center py-4 text-white'>&copy; 2022, All Right Reserved by Tohid</h6>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer