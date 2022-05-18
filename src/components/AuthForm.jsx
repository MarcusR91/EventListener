import { useState, useRef, useContext } from 'react';
import './style/AuthForm.css';
import {useNavigate} from 'react-router-dom';
import Button from './utils/Button';
import axios from 'axios';
import AuthContext from '../Context/AuthContext';


const AuthForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const AuthCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }


    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        setIsLoading(true);
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8guQtCGZiThtbsMv6sDyKw2XVUV9Dj78'
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8guQtCGZiThtbsMv6sDyKw2XVUV9Dj78'
        }
        fetch(
          url,
          {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ).then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication failed!';

              console.log(data);
              throw new Error(errorMessage)
            });
          }
        }).then(data => {
            AuthCtx.login(data.idToken)
            console.log(data)
        }).catch((err) => {
            alert(err.message);
        });
      };


    return(
        <section className="auth">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className="control">
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className="control">
            <label htmlFor='password'>Your Password</label>
            <input type='password' id='password' required ref={passwordInputRef} />
          </div>
          <div className="actions">
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
            <button
              type='button'
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    );
  };
    
 


export default AuthForm;