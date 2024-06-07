// import React from 'react';
import { createGlobalStyle, keyframes, styled } from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import googleIcon from './google-icon.png'; // Import Google icon image
// import facebookIcon from './facebook-icon.png'; // Import Facebook icon image
import person from './person.png';
import { position } from '@chakra-ui/react';


const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient(#30142b, #a12727);
  }
`;

const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const LoginBoxHeading = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

const UserBox = styled.div`
  position: relative;
`;

const UserBoxInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

const UserBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;

const UserBoxInputFocus = styled(UserBoxInput)`
  &:focus ~ ${UserBoxLabel},
  &:valid ~ ${UserBoxLabel} {
    top: -20px;
    left: 0;
    color: #f68e44;
    font-size: 12px;
  }
`;

const LoginButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #b79726;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
`;

const LoginButtonHover = styled(LoginButton)`
  &:hover {
    background: #f49803;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #f4c803,
              0 0 25px #bd9d0b,
              0 0 50px #f4e403,
              0 0 100px #d5cf1e;
  }
`;

const ButtonSpan = styled.span`
  position: absolute;
  display: block;
`;

const btnAnim1 = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const btnAnim2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const btnAnim3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const btnAnim4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;

const ButtonSpan1 = styled(ButtonSpan)`
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f4c003);
  animation: ${btnAnim1} 1s linear infinite;
`;

const ButtonSpan2 = styled(ButtonSpan)`
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #f4bc03);
  animation: ${btnAnim2} 1s linear infinite;
  animation-delay: 0.25s;
`;

const ButtonSpan3 = styled(ButtonSpan)`
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #f4dc03);
  animation: ${btnAnim3} 1s linear infinite;
  animation-delay: 0.5s;
`;

const button = styled(ButtonSpan)`
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #f4b003);
  animation: ${btnAnim4} 1s linear infinite;
  animation-delay: 0.75s;
//   border: none; /* remove border */
//   background: transparent;
`;

const Login = (props) => {
    const { showAlert, setLoggedin } = props;
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
      
        // console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            // const name= await body.name;
            // console.log(name);
            localStorage.setItem('token', json.authtoken);

            setLoggedin(true)
            showAlert("LoggedIn Successfully", "success");
            history("/");
        } else {
            showAlert("Invalid credentials", "danger");
        }
    }

        const onChange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
        }
  return (
    <>
      <GlobalStyles />
      <LoginBox>
        <LoginBoxHeading>Login</LoginBoxHeading>
        <form  onSubmit={handleSubmit}>
          <UserBox>
            {/* <label htmlFor=""></label> */}
            <label>Email address</label>
            {/* <UserBoxInput type="text" name="" required /> */}
            <UserBoxInput type="email" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
          </UserBox>
          <UserBox>
          <label>Password</label>
            {/* <UserBoxInput type="password" name="" required /> */}
            <UserBoxInput type="password" value={credentials.password} onChange={onChange} name="password" id="password" />
          {/* <UserBoxLabel  >Password</UserBoxLabel> */}

            {/* <UserBoxLabel>Password</UserBoxLabel> */}
          </UserBox>
          <LoginButtonHover type="submit" onSubmit={handleSubmit}>
            <ButtonSpan1 />
            <ButtonSpan2 />
            <ButtonSpan3 />
            {/* <ButtonSpan4 /> */}
            <button type="submit"  style={{ border:" none", /* remove border */
  background: "transparent", color:"#b79726"}}>LOGIN</button>
            {/* Submit */}
            {/* submit */}
          </LoginButtonHover>
        </form>
      </LoginBox>
    </>
  );
};

export default Login;