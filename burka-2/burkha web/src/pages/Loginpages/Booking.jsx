import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Bookings = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Your Bookings</h3>
        <Button variant="success">New Booking</Button>
      </div>
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Date</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#12345</td>
                  <td>May 15, 2023</td>
                  <td>AC Service</td>
                  <td><span className="badge bg-success">Confirmed</span></td>
                  <td><Button variant="outline-success" size="sm">View</Button></td>
                </tr>
                <tr>
                  <td>#12346</td>
                  <td>May 20, 2023</td>
                  <td>Plumbing</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                  <td><Button variant="outline-success" size="sm">View</Button></td>
                </tr>
                <tr>
                  <td>#12347</td>
                  <td>May 25, 2023</td>
                  <td>Electrical</td>
                  <td><span className="badge bg-danger">Cancelled</span></td>
                  <td><Button variant="outline-success" size="sm">View</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Bookings;