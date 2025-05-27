import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Address = ({ user }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>My Address</h3>
        <Button variant="success">Add New Address</Button>
      </div>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-success border-2">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h5>Primary Address</h5>
                <div>
                  <Button variant="outline-success" size="sm" className="me-2">Edit</Button>
                  <Button variant="outline-danger" size="sm">Delete</Button>
                </div>
              </div>
              <hr />
              <p className="mb-1"><strong>{user.name}</strong></p>
              <p className="mb-1">{user.address}</p>
              <p className="mb-1">Phone: {user.phone}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h5>Office Address</h5>
                <div>
                  <Button variant="outline-success" size="sm" className="me-2">Edit</Button>
                  <Button variant="outline-danger" size="sm">Delete</Button>
                </div>
              </div>
              <hr />
              <p className="mb-1"><strong>Prashant Shrivas</strong></p>
              <p className="mb-1">456 Business Park, City, State - 789012</p>
              <p className="mb-1">Phone: 9876543210</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Address;