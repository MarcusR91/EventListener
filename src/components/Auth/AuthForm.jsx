import { useState, useRef, useContext } from 'react';
import './style/AuthForm.css';
import {useNavigate} from 'react-router-dom';
import Button from '../utils/Button';
import axios from 'axios';
import AuthContext from '../../Context/AuthContext';
import { authenticateUser } from '../../API/auth/auth-function';
import {useNavigate} from 'react-router-dom';


const AuthForm = () => {
  const navigate = useNavigate();
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
       authenticateUser(isLogin, enteredEmail,enteredPassword, AuthCtx ,setIsLoading);

       navigate('/')
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