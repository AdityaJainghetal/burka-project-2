// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Nav, Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { 
//   HouseDoor, 
//   Calendar, 
//   Cart, 
//   GeoAlt, 
//   Person, 
//   Key, 
//   BoxArrowLeft,
//   Gear,
//   List,
//   X
// } from 'react-bootstrap-icons';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [user, setUser] = useState({
//     name: 'Prashant Shrivas',
//     email: 'shrivasprashant41@gmail.com',
//     phone: '7869678485',
//     address: '123 Green Park, City, State - 123456'
//   });

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return (
//           <div>
//             <h3 className="mb-4">Dashboard Overview</h3>
//             <Row>
//               <Col md={6} lg={4} className="mb-4">
//                 <Card className="h-100 border-0 shadow-sm bg-success bg-opacity-10">
//                   <Card.Body>
//                     <div className="d-flex align-items-center">
//                       <div className="bg-success bg-opacity-25 p-3 rounded-circle me-3">
//                         <Calendar size={24} className="text-success" />
//                       </div>
//                       <div>
//                         <h6 className="mb-1">Upcoming Bookings</h6>
//                         <h4 className="mb-0">3</h4>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={6} lg={4} className="mb-4">
//                 <Card className="h-100 border-0 shadow-sm bg-success bg-opacity-10">
//                   <Card.Body>
//                     <div className="d-flex align-items-center">
//                       <div className="bg-success bg-opacity-25 p-3 rounded-circle me-3">
//                         <Cart size={24} className="text-success" />
//                       </div>
//                       <div>
//                         <h6 className="mb-1">Cart Items</h6>
//                         <h4 className="mb-0">2</h4>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={6} lg={4} className="mb-4">
//                 <Card className="h-100 border-0 shadow-sm bg-success bg-opacity-10">
//                   <Card.Body>
//                     <div className="d-flex align-items-center">
//                       <div className="bg-success bg-opacity-25 p-3 rounded-circle me-3">
//                         <Person size={24} className="text-success" />
//                       </div>
//                       <div>
//                         <h6 className="mb-1">Account Status</h6>
//                         <h4 className="mb-0">Active</h4>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//             <Card className="border-0 shadow-sm">
//               <Card.Body>
//                 <h5 className="mb-3">Welcome back, {user.name}!</h5>
//                 <p className="text-muted">Here's what's happening with your account today.</p>
//                 <hr />
//                 <Row>
//                   <Col md={6}>
//                     <h6 className="mb-3">Recent Activity</h6>
//                     <ul className="list-unstyled">
//                       <li className="mb-2">
//                         <span className="badge bg-success me-2">✓</span>
//                         Booking confirmed for May 15
//                       </li>
//                       <li className="mb-2">
//                         <span className="badge bg-success me-2">✓</span>
//                         Payment received for order #12345
//                       </li>
//                       <li className="mb-2">
//                         <span className="badge bg-success me-2">✓</span>
//                         Profile updated successfully
//                       </li>
//                     </ul>
//                   </Col>
//                   <Col md={6}>
//                     <h6 className="mb-3">Quick Actions</h6>
//                     <Button variant="outline-success" className="me-2 mb-2">
//                       <Cart className="me-1" /> Book Service
//                     </Button>
//                     <Button variant="outline-success" className="me-2 mb-2">
//                       <GeoAlt className="me-1" /> Add Address
//                     </Button>
//                     <Button variant="outline-success" className="mb-2">
//                       <Gear className="me-1" /> Account Settings
//                     </Button>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </div>
//         );
//       case 'bookings':
//         return (
//           <div>
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h3>Your Bookings</h3>
//               <Button variant="success">New Booking</Button>
//             </div>
//             <Card className="border-0 shadow-sm">
//               <Card.Body>
//                 <div className="table-responsive">
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th>Booking ID</th>
//                         <th>Date</th>
//                         <th>Service</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>#12345</td>
//                         <td>May 15, 2023</td>
//                         <td>AC Service</td>
//                         <td><span className="badge bg-success">Confirmed</span></td>
//                         <td><Button variant="outline-success" size="sm">View</Button></td>
//                       </tr>
//                       <tr>
//                         <td>#12346</td>
//                         <td>May 20, 2023</td>
//                         <td>Plumbing</td>
//                         <td><span className="badge bg-warning text-dark">Pending</span></td>
//                         <td><Button variant="outline-success" size="sm">View</Button></td>
//                       </tr>
//                       <tr>
//                         <td>#12347</td>
//                         <td>May 25, 2023</td>
//                         <td>Electrical</td>
//                         <td><span className="badge bg-danger">Cancelled</span></td>
//                         <td><Button variant="outline-success" size="sm">View</Button></td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         );
//       case 'cart':
//         return (
//           <div>
//             <h3 className="mb-4">Your Cart Bookings</h3>
//             <Card className="border-0 shadow-sm">
//               <Card.Body>
//                 <div className="table-responsive">
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th>Service</th>
//                         <th>Date</th>
//                         <th>Price</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>AC Service</td>
//                         <td>June 1, 2023</td>
//                         <td>₹599</td>
//                         <td>
//                           <Button variant="outline-danger" size="sm" className="me-2">Remove</Button>
//                           <Button variant="success" size="sm">Checkout</Button>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Plumbing</td>
//                         <td>June 5, 2023</td>
//                         <td>₹799</td>
//                         <td>
//                           <Button variant="outline-danger" size="sm" className="me-2">Remove</Button>
//                           <Button variant="success" size="sm">Checkout</Button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//                 <div className="d-flex justify-content-end mt-3">
//                   <Button variant="success" size="lg">Proceed to Payment (₹1398)</Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         );
//       case 'address':
//         return (
//           <div>
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h3>My Address</h3>
//               <Button variant="success">Add New Address</Button>
//             </div>
//             <Row>
//               <Col md={6} className="mb-4">
//                 <Card className="h-100 border-success border-2">
//                   <Card.Body>
//                     <div className="d-flex justify-content-between">
//                       <h5>Primary Address</h5>
//                       <div>
//                         <Button variant="outline-success" size="sm" className="me-2">Edit</Button>
//                         <Button variant="outline-danger" size="sm">Delete</Button>
//                       </div>
//                     </div>
//                     <hr />
//                     <p className="mb-1"><strong>{user.name}</strong></p>
//                     <p className="mb-1">{user.address}</p>
//                     <p className="mb-1">Phone: {user.phone}</p>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={6} className="mb-4">
//                 <Card className="h-100 border-0 shadow-sm">
//                   <Card.Body>
//                     <div className="d-flex justify-content-between">
//                       <h5>Office Address</h5>
//                       <div>
//                         <Button variant="outline-success" size="sm" className="me-2">Edit</Button>
//                         <Button variant="outline-danger" size="sm">Delete</Button>
//                       </div>
//                     </div>
//                     <hr />
//                     <p className="mb-1"><strong>Prashant Shrivas</strong></p>
//                     <p className="mb-1">456 Business Park, City, State - 789012</p>
//                     <p className="mb-1">Phone: 9876543210</p>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </div>
//         );
//       case 'account':
//         return (
//           <div>
//             <h3 className="mb-4">Account Details</h3>
//             <Row>
//               <Col md={6}>
//                 <Card className="border-0 shadow-sm mb-4">
//                   <Card.Body>
//                     <h5 className="mb-3">Personal Information</h5>
//                     <Form>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Full Name</Form.Label>
//                         <Form.Control type="text" value={user.name} />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Email Address</Form.Label>
//                         <Form.Control type="email" value={user.email} />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Phone Number</Form.Label>
//                         <Form.Control type="tel" value={user.phone} />
//                       </Form.Group>
//                       <Button variant="success">Update Information</Button>
//                     </Form>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={6}>
//                 <Card className="border-0 shadow-sm">
//                   <Card.Body>
//                     <h5 className="mb-3">Profile Picture</h5>
//                     <div className="text-center mb-3">
//                       <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '120px', height: '120px'}}>
//                         <Person size={48} className="text-success" />
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-center">
//                       <Button variant="outline-success" className="me-2">Upload New</Button>
//                       <Button variant="outline-danger">Remove</Button>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </div>
//         );
//       case 'password':
//         return (
//           <div>
//             <h3 className="mb-4">Change Password</h3>
//             <Card className="border-0 shadow-sm">
//               <Card.Body>
//                 <Form>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Current Password</Form.Label>
//                     <Form.Control type="password" placeholder="Enter current password" />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>New Password</Form.Label>
//                     <Form.Control type="password" placeholder="Enter new password" />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Confirm New Password</Form.Label>
//                     <Form.Control type="password" placeholder="Confirm new password" />
//                   </Form.Group>
//                   <Button variant="success">Update Password</Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleLogout = () => {
//     // Implement logout functionality
//     console.log('User logged out');
//   };

//   return (
//     <div className="dashboard-wrapper">
//       {/* Mobile Header */}
//       <div className="d-md-none bg-success text-white p-3 d-flex justify-content-between align-items-center">
//         <h5 className="mb-0">My Account</h5>
//         <Button 
//           variant="outline-light" 
//           onClick={toggleMobileMenu}
//           className="p-1"
//         >
//           {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
//         </Button>
//       </div>

//       <Container fluid className="dashboard-container">
//         <Row>
//           {/* Sidebar - Hidden on mobile when menu is closed */}
//           <Col 
//             md={3} 
//             lg={2} 
//             className={`sidebar p-0 ${mobileMenuOpen ? 'mobile-menu-open' : 'd-none d-md-block'}`}
//           >
//             <div className="sidebar-header p-3 bg-success text-white">
//               <h4>My Account</h4>
//             </div>
            
//             <Nav className="flex-column sidebar-nav">
//               <Nav.Link 
//                 active={activeTab === 'dashboard'} 
//                 onClick={() => {
//                   setActiveTab('dashboard');
//                   setMobileMenuOpen(false);
//                 }}
//                 className="d-flex align-items-center"
//               >
//                 <HouseDoor className="me-2" /> Dashboard
//               </Nav.Link>
//               <Nav.Link 
//                 active={activeTab === 'bookings'} 
//                 onClick={() => {
//                   setActiveTab('bookings');
//                   setMobileMenuOpen(false);
//                 }}
//                 className="d-flex align-items-center"
//               >
//                 <Calendar className="me-2" /> Your Bookings
//               </Nav.Link>
//               <Nav.Link 
//                 active={activeTab === 'cart'} 
//                 onClick={() => {
//                   setActiveTab('cart');
//                   setMobileMenuOpen(false);
//                 }}
//                 className="d-flex align-items-center"
//               >
//                 <Cart className="me-2" /> Your Cart Bookings
//               </Nav.Link>
//               <Nav.Link 
//                 active={activeTab === 'address'} 
//                 onClick={() => {
//                   setActiveTab('address');
//                   setMobileMenuOpen(false);
//                 }}
//                 className="d-flex align-items-center"
//               >
//                 <GeoAlt className="me-2" /> My Address
//               </Nav.Link>
//               <Nav.Link 
//                 active={activeTab === 'account'} 
//                 onClick={() => {
//                   setActiveTab('account');
//                   setMobileMenuOpen(false);
//                 }}
//                 className="d-flex align-items-center"
//               >
//                 <Person className="me-2" /> Account Details
//               </Nav.Link>
//               <Nav.Link 
//                 active={activeTab === 'password'} 
//                 onClick={() => {
//                   setActiveTab('password');
//                   setMobileMenuOpen(false);
//                 }}
//                 className="d-flex align-items-center"
//               >
//                 <Key className="me-2" /> Change Password
//               </Nav.Link>
//               <Nav.Link 
//                 onClick={handleLogout}
//                 className="d-flex align-items-center"
//               >
//                 <BoxArrowLeft className="me-2" /> Logout
//               </Nav.Link>
//             </Nav>
            
//             <div className="user-info p-3 bg-light">
//               <h6>{user.name}</h6>
//               <p className="mb-1 text-muted small">{user.email}</p>
//               <p className="text-muted small">{user.phone}</p>
//             </div>
//           </Col>
          
//           {/* Main Content */}
//           <Col md={9} lg={10} className="main-content p-4">
//             {renderContent()}
//           </Col>
//         </Row>
//       </Container>

//       {/* Custom CSS */}
//       <style jsx>{`
//         .dashboard-wrapper {
//           min-height: 100vh;
//           background-color: #f8f9fa;
//         }
//         .sidebar {
//           background-color: white;
//           min-height: 100vh;
//           box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
//           position: relative;
//           z-index: 100;
//         }
//         .sidebar-nav .nav-link {
//           color: #495057;
//           padding: 12px 20px;
//           border-left: 3px solid transparent;
//           transition: all 0.3s;
//         }
//         .sidebar-nav .nav-link:hover {
//           background-color: #e9f5ee;
//           color: #198754;
//         }
//         .sidebar-nav .nav-link.active {
//           background-color: #e9f5ee;
//           color: #198754;
//           border-left: 3px solid #198754;
//           font-weight: 500;
//         }
//         .user-info {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           border-top: 1px solid #eee;
//         }
//         @media (max-width: 767.98px) {
//           .mobile-menu-open {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             z-index: 1050;
//             overflow-y: auto;
//           }
//           .main-content {
//             padding-top: 20px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState } from 'react';
// import DashboardOverview from './DashboardOverview';
// import Bookings from './Booking';
// import Cart from './Cart';
// import Address from './Address';
// import AccountDetails from './AccountDetails';
// import ChangePassword from './ChangePassword';
// import { 
//   HouseDoor, 
//   Calendar, 
//   Cart as CartIcon, 
//   GeoAlt, 
//   Person, 
//   Key, 
//   BoxArrowLeft,
//   List,
//   X
// } from 'react-bootstrap-icons';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [user, setUser] = useState({
//     name: 'Prashant Shrivas',
//     email: 'shrivasprashant41@gmail.com',
//     phone: '7869678485',
//     address: '123 Green Park, City, State - 123456'
//   });

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return <DashboardOverview user={user} />;
//       case 'bookings':
//         return <Bookings />;
//       case 'cart':
//         return <Cart />;
//       case 'address':
//         return <Address user={user} />;
//       case 'account':
//         return <AccountDetails user={user} />;
//       case 'password':
//         return <ChangePassword />;
//       default:
//         return null;
//     }
//   };

//   const handleLogout = () => {
//     console.log('User logged out');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Mobile Header */}
//       <div className="md:hidden bg-green-600 text-white p-4 flex justify-between items-center">
//         <h5 className="m-0">My Account</h5>
//         <button 
//           onClick={toggleMobileMenu}
//           className="p-2 text-white hover:bg-green-700 rounded"
//         >
//           {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
//         </button>
//       </div>

//       <div className="flex flex-row">
//         {/* Sidebar */}
//         <div className={`w-full md:w-64 bg-white min-h-screen shadow-lg ${mobileMenuOpen ? 'fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto' : 'hidden md:block'}`}>
//           <div className="p-4 bg-green-600 text-white">
//             <h4 className="m-0">My Account</h4>
//           </div>
          
//           <nav className="flex flex-col">
//             <button 
//               onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }}
//               className={`flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 ${activeTab === 'dashboard' ? 'bg-green-50 text-green-600 border-green-600 font-medium' : 'border-transparent'}`}
//             >
//               <HouseDoor className="mr-2" /> Dashboard
//             </button>
//             <button 
//               onClick={() => { setActiveTab('bookings'); setMobileMenuOpen(false); }}
//               className={`flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 ${activeTab === 'bookings' ? 'bg-green-50 text-green-600 border-green-600 font-medium' : 'border-transparent'}`}
//             >
//               <Calendar className="mr-2" /> Your Bookings
//             </button>
//             <button 
//               onClick={() => { setActiveTab('cart'); setMobileMenuOpen(false); }}
//               className={`flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 ${activeTab === 'cart' ? 'bg-green-50 text-green-600 border-green-600 font-medium' : 'border-transparent'}`}
//             >
//               <CartIcon className="mr-2" /> Your Cart Bookings
//             </button>
//             <button 
//               onClick={() => { setActiveTab('address'); setMobileMenuOpen(false); }}
//               className={`flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 ${activeTab === 'address' ? 'bg-green-50 text-green-600 border-green-600 font-medium' : 'border-transparent'}`}
//             >
//               <GeoAlt className="mr-2" /> My Address
//             </button>
//             <button 
//               onClick={() => { setActiveTab('account'); setMobileMenuOpen(false); }}
//               className={`flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 ${activeTab === 'account' ? 'bg-green-50 text-green-600 border-green-600 font-medium' : 'border-transparent'}`}
//             >
//               <Person className="mr-2" /> Account Details
//             </button>
//             <button 
//               onClick={() => { setActiveTab('password'); setMobileMenuOpen(false); }}
//               className={`flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 ${activeTab === 'password' ? 'bg-green-50 text-green-600 border-green-600 font-medium' : 'border-transparent'}`}
//             >
//               <Key className="mr-2" /> Change Password
//             </button>
//             <button 
//               onClick={handleLogout}
//               className="flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 border-transparent"
//             >
//               <BoxArrowLeft className="mr-2" /> Logout
//             </button>
//           </nav>
          
//           <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-100 border-t border-gray-200">
//             <h6 className="m-0">{user.name}</h6>
//             <p className="mb-1 text-gray-500 text-sm">{user.email}</p>
//             <p className="text-gray-500 text-sm">{user.phone}</p>
//           </div>
//         </div>
        
//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Calendar, Cart, Person, GeoAlt, Gear } from 'react-bootstrap-icons';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h3 className="mb-4">Dashboard Overview</h3>
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm bg-success bg-opacity-10">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-25 p-3 rounded-circle me-3">
                  <Calendar size={24} className="text-success" />
                </div>
                <div>
                  <h6 className="mb-1">Upcoming Bookings</h6>
                  <h4 className="mb-0">3</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm bg-success bg-opacity-10">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-25 p-3 rounded-circle me-3">
                  <Cart size={24} className="text-success" />
                </div>
                <div>
                  <h6 className="mb-1">Cart Items</h6>
                  <h4 className="mb-0">2</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm bg-success bg-opacity-10">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-25 p-3 rounded-circle me-3">
                  <Person size={24} className="text-success" />
                </div>
                <div>
                  <h6 className="mb-1">Account Status</h6>
                  <h4 className="mb-0">Active</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <h5 className="mb-3">Welcome back, !</h5>
          <p className="text-muted">Here's what's happening with your account today.</p>
          <hr />
          <Row>
            <Col md={6}>
              <h6 className="mb-3">Recent Activity</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="badge bg-success me-2">✓</span>
                  Booking confirmed for May 15
                </li>
                <li className="mb-2">
                  <span className="badge bg-success me-2">✓</span>
                  Payment received for order #12345
                </li>
                <li className="mb-2">
                  <span className="badge bg-success me-2">✓</span>
                  Profile updated successfully
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <h6 className="mb-3">Quick Actions</h6>
              <Button variant="outline-success" className="me-2 mb-2">
                <Cart className="me-1" /> Book Service
              </Button>
              <Button variant="outline-success" className="me-2 mb-2">
                <GeoAlt className="me-1" /> Add Address
              </Button>
              <Button variant="outline-success" className="mb-2">
                <Gear className="me-1" /> Account Settings
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;