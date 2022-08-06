import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  
  return (
    <div className="App">
    
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="text">Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className="modtext" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="text">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" className="modtext" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" className="checkk"/>
  </Form.Group>
  <Button variant="primary" type="submit" className="button">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
