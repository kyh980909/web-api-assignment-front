import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './login.css';

const EndPoint = 'http://localhost:4000/api/account/';

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
  state = {
    username: '',
    password: ''
  };

  register = () => {
    window.location.href = '/register';
  };

  login = () => {
    const username = this.state.username;
    const password = this.state.password;
    const { loginUser } = this.props;

    if (username === '') alert('아이디를 입력해주세요!');
    else if (password === '') alert('비밀번호를 입력해주세요!');
    else {
      axios
        .post(EndPoint + 'login', {
          username,
          password
        })
        .then(res => res.data)
        .then(data => {
          const { ok, error } = data;
          if (ok) {
            alert('로그인 성공!');
            loginUser();
            window.location.href = '/';
          } else {
            alert(error);
          }
        })
        .catch(err => console.error(err));
    }
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Container>
        <LoginForm>
          <Label className="sign-label">Sign in</Label>
          <Label className="username-label">Your ID</Label>
          <input
            autoFocus
            name="username"
            value={this.username}
            onChange={this.handleInput}
          />
          <Label className="password-label">Your Password</Label>
          <input
            name="password"
            type="password"
            value={this.password}
            onChange={this.handleInput}
          />
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
