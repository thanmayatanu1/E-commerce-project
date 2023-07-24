import React, { useState } from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

function ContactUs({ handleFormSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a formData object with the entered values
    const formData = {
      name,
      email,
      phone,
    };

    // Pass the formData to the handleFormSubmit function
    handleFormSubmit(formData);

    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Container>
        <Row>
        <Col xs={12} md={6} className="mx-auto">
        <div className="signup-form">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      </div>
      </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;