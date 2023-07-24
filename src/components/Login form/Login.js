import React, {useContext, useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {Link, useNavigate} from'react-router-dom';
import CartContext from '../Cart/cart-context';
import './Signup.css';

export default function SignUp () {
    const ctx = useContext(CartContext);
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(true);
    const [loginSignUpText, setLoginSignUpText] = useState('Log in');
    const [loginSignUpButton, setLoginSignUpButton] = useState('Log in');
    const [alterText, setAlterText] = useState("Don't have an account? Sign up now");
    const [loading, setLoading] = useState(false);
    const API_KEY_SIGNUP = "AIzaSyArLe4nbsPdxIdpdspvkJi6av4j-myYFYQ";
    const API_KEY_LOGIN = "AIzaSyArLe4nbsPdxIdpdspvkJi6av4j-myYFYQ";
  
    const handleSignUp = () => {
      // Reset form fields
      setLoading(true);
  
      if (isLogin) {
        // Handle login
        localStorage.setItem("email", email);
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY_LOGIN}`, {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
          }),
          headers: {
            'Content-type': 'application/json'
          }
        })
          .then(res => {
            setLoading(false);
            if (res.ok) {
              // Signup success
              alert("Logged in successfully");
  
              navigate('/Albums', { replace: true });
              return res.json(); // Parse response JSON
            } else {
              // Show error message
              let errorMessage = "Authentication Failed";
              if (res && res.error && res.error.message) {
                errorMessage = res.error.message;
              }
              throw new Error(errorMessage);
            }
          })
          .then(data => {
            ctx.auth.login(data.idToken);
          })
          .catch(error => {
            // Handle fetch error
            alert("Error is here 2" + error.message);
          });
      } else {
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY_SIGNUP}`, {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
          }),
          headers: {
            'Content-type': 'application/json'
          }
        })
          .then(res => {
            setLoading(false);
            if (res.ok) {
              // Signup success
              alert("Account created successfully -- Login now");
            } else {
              res.json().then(result => {
                // Show error message
                let errorMessage = "Authentication Failed";
                if (result && result.error && result.error.message) {
                  errorMessage = result.error.message;
                }
                throw new Error(errorMessage);
              });
            }
          })
          .catch(error => {
            // Handle fetch error
            alert("Error is here 1" +error.message);
          });
      }
  
      setEmail('');
      setPassword('');
    };
  
    const activeLoginSignupHandler = () => {
      if (isLogin) {
        setLoginSignUpButton('Create new account');
        setAlterText("Already have an account? Login here");
        setLogin(false);
        setLoginSignUpText('Sign up');
      } else {
        setLoginSignUpButton('Log in');
        setAlterText("Don't have an account? Sign up now");
        setLogin(true);
        setLoginSignUpText('Log in');
      }
    };
  
    return (
      <Container className="signup-container pt-5">
        <Row>
          <Col xs={12} md={6} className="mx-auto">
            <div className="signup-form">
              <h2>{loginSignUpText}</h2>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
  
                {!loading && (
                  <div>
                    <Button variant="primary" type="button" className="mt-2" onClick={handleSignUp}>
                      {loginSignUpButton}
                    </Button>
  
                    <br />
                    <Link onClick={activeLoginSignupHandler} className="mt-4">{alterText}</Link>
                  </div>
                )}
                {loading && <p>Loading.....</p>}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  

