import React from 'react';
import styled from 'styled-components';
import './login.css';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
`;

const Label = styled.div``;

const LoginBt = styled.div`
  background: #2bbbad;
  color: #ffffff;
  margin: 0.375rem;
  text-transform: uppercase;
  word-wrap: break-word;
  white-space: normal;
  cursor: pointer;
  border: 0;
  border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
  align-self: center;
`;

const RegisterBt = styled.div`
  background: #3f51b5;
  color: #ffffff;
  margin: 0.375rem;
  text-transform: uppercase;
  word-wrap: break-word;
  white-space: normal;
  cursor: pointer;
  border: 0;
  border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
  align-self: center;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

class LoginComponent extends React.Component {
  register = () => {
    window.location.href = '/register';
  };

  login = () => {};
  render() {
    return (
      <Container>
        <LoginForm>
          <Label className="sign-label">Sign in</Label>
          <Label className="username-label">Your ID</Label>
          <input autoFocus />
          <Label className="password-label">Your Password:</Label>
          <input type="passowrd" />
          <Row>
            <LoginBt onClick={this.login}>Login</LoginBt>
            <RegisterBt onClick={this.register}>Register</RegisterBt>
          </Row>
        </LoginForm>
      </Container>
    );
  }
}

export default LoginComponent;
