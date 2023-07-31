import { useRef, useContext } from 'react';
import AuthContext from '../Authentication/AuthContext';
// import { useHistory } from 'react-router-dom';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=YOUR_API_KEY', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => {
      // assumption: always successful
      alert('Password changed successfully');
    });
  };

  return (
    <Container>
         <Row>
        <Col xs={12} md={6} className="mx-auto">
        <div className="signup-form"></div>
        <h1>Your User Profile</h1>
    <Form onSubmit={submitHandler}>
      <Form.Group >
        <Form.Label htmlFor='new-password'>New Password</Form.Label>
        <Form.Control type='password' id='new-password' minLength='7' ref={newPasswordInputRef} />
      </Form.Group>
      <Form.Group>
        <Button type='submit'>Change Password</Button>
      </Form.Group>
    </Form>
    </Col>
      </Row>
    </Container>
  );
};

export default ProfileForm;