import { useState, useRef, useContext } from "react";


import classes from './AuthenticationForm.module.css';
import AuthContext from "./AuthContext";

const AuthForm = () => {
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

   setIsLoading(true);
   let url;
    if (isLogin) {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrPiMlfXdXKQWJ8LcnF_RA6hTW6qt20gs'

    }else {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrPiMlfXdXKQWJ8LcnF_RA6hTW6qt20gs'
      
    }
    fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),

        headers: {
          'Content-Type':'application/json'
        }
      }
      
      ).then((res) => {
        setIsLoading(false);
        if(res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            //show an error modal
            let errorMessage = 'Authentication failed!';
         
          throw new Error(errorMessage)
          });
        }
      })
      .then(data => {
        authCtx.login(data.idToken);
        //console.log(data);
        
      })
      .catch(err => {
        alert(err.message)

      })
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email:</label>
          <input type="email" id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password:</label>
          <input type="password" id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
        {isLoading && <p>Sending request....</p>}
        <button
        type='button'
        className={classes.toggle}
        onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new Account' : 'Login with existing account'}

        </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;