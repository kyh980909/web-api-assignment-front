import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './register.css';

const EndPoint = 'http://localhost:4000/api/account/';

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
`;

const Label = styled.div``;

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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

const MainBt = styled.div`
  margin-top: 1rem;
  margin-left: 45%;
  margin-right: 45%;
  background: #3f51b5;
  color: #ffffff;
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

class Register extends React.Component {
  state = {
    username: '',
    password: ''
  };
  main = () => {
    window.location.href = '/';
  };

  register = () => {
    const username = this.state.username;
    const password = this.state.password;

    console.log(username);
    console.log(password);
    if (username === '') alert('아이디를 입력해주세요!');
    else if (password === '') alert('비밀번호를 입력해주세요!');
    else {
      axios
        .post(EndPoint + 'register', {
          username,
          password
        })
        .then(res => res.data)
        .then(data => {
          const { ok, error } = data;
          if (ok) {
            alert('회원가입 되었습니다!');
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
    console.log(e.target.name);
    console.log(this.state.username);
  };
  render() {
    return (
      <div>
        <MainBt onClick={this.main}>Main</MainBt>
        <Container>
          <RegisterForm>
            <Label className="register-label">Sign up</Label>
            <Label className="username-label">Your ID</Label>
            <Row>
              <input
                autoFocus
                name="username"
                value={this.username}
                onChange={this.handleInput}
              />
            </Row>
            <Label className="password-label">Your Password</Label>
            <Row>
              <input
                name="password"
                type="password"
                value={this.password}
                onChange={this.handleInput}
              />
            </Row>
            <RegisterBt onClick={this.register}>Register</RegisterBt>
          </RegisterForm>
        </Container>
      </div>
    );
  }
}

export default Register;
