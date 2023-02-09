import React, { useContext, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
//import Input from '../UI/Input/Input';

// const emailReducer = (state, action) => {
//   if(action.type === "USER_INPUT"){
//     return {value:action.val, isValid: action.val.includes('@')}
//   }
//   if(action.type === "USER_BLUR"){
//     return {value:state.value, isValid: action.value.includes('@')}
//   }
//   return {value:"", isValid: false }
// }
// const passwordReducer  = (state, action) => {
//   if(action.type === "USER_INPUT"){
//     return {value:action.val, isValid: action.val.includes('@')}
//   }
//   if(action.type === "USER_BLUR"){
//     return {value:state.value, isValid: action.value.includes('@')}
//   }
//   return {value:"", isValid: false }
// }

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState();

  const authCtx = useContext(AuthContext)

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        {/* <Input
        id='email'
        label='email'
        type='email'
        value={emailIsValid}
       
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
         /> */}
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        {/* <input
        id='password'
        label='Password'
        type='password'
        value={passwordIsValid}
        onChange={passwordChangeHandler}
           onBlur={validatePasswordHandler}
         /> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
