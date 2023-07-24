import React, { useState } from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

function FetchMovies({ handleFormSubmit }) {
  const [title, settitle] = useState('');
  const [director, setdirector] = useState('');
  const [year, setyear] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a formData object with the entered values
    const formData = {
      title,
      director,
      year,
    };

    // Pass the formData to the handleFormSubmit function
    handleFormSubmit(formData);

    // Reset the form fields
    settitle('');
    setdirector('');
    setyear('');
  };

  return (
    <Container>
        <Row>
        <Col xs={12} md={6} className="mx-auto">
        <div className="signup-form">
      <h2>Welcome!!!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Director:</Form.Label>
          <Form.Control
            type="email"
            value={director}
            onChange={(e) => setdirector(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Year:</Form.Label>
          <Form.Control
            type="tel"
            value={year}
            onChange={(e) => setyear(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Add Movies</Button>
      </Form>
      </div>
      </Col>
      </Row>
    </Container>
  );
}

export default FetchMovies;