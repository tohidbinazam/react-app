import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
        <Container>
          <Row>
            <Col md='12'>
              <Card border='none' className='shadow-sm my-3'>
                <Card.Header>
                  <Link className='btn btn-primary' to='/admin/table-view'>Table View</Link> &nbsp;
                  <Link className='btn btn-success' to='/admin/grid-view'>Grid View</Link>
                </Card.Header>
                <Card.Body>
                  
                  <Outlet />

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Admin