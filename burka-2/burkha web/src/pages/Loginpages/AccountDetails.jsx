import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';

const AccountDetails = ({ user }) => {
  
  

  return (
    <div>
      <h3 className="mb-4">Account Details</h3>
      <Row>
        <Col md={6}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-3">Personal Information</h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" value={user.name} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" value={user.email} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" value={user.phone} />
                </Form.Group>
                <Button variant="success">Update Information</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h5 className="mb-3">Profile Picture</h5>
              <div className="text-center mb-3">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '120px', height: '120px'}}>
                  <Person size={48} className="text-success" />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="outline-success" className="me-2">Upload New</Button>
                <Button variant="outline-danger">Remove</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AccountDetails;