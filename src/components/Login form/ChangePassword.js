import React, { useState,useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CartContext from '../Store/cart-context';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const authCtx = useContext(CartContext);
  const history=useNavigate();
  const handleChangePassword = () => {
    // Handle change password logic here
  let url="https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyArLe4nbsPdxIdpdspvkJi6av4j-myYFYQ"

      fetch(url,{
        method:"POST",
        body:JSON.stringify({
            idToken:authCtx.auth.tokenn,
            password:password,
            returnSecureToken:false,
        }) ,
       headers:{
        "Content-Type":"application/json"
       }    
    }).then(res=>{
        // Success 
        history('/Home', { replace: true });
    })
    // Reset the password field
    setPassword('');
  };

  return (
    <Container>
      <h1>Your User Profile</h1>
      <Form>
        <Form.Group controlId="formPassword">
          <Form.Label>Password Change</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={7}
          />
        </Form.Group>
        <Button variant="primary" className='mt-3' onClick={handleChangePassword}>
          Change Password
        </Button>
      </Form>
    </Container>
  );
}