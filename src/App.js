import React from 'react';
import './App.css';
import Public from './components/public';
import Private from './components/private';

class AppContainer extends React.Component {
  state = {
    isLoggedIn: false
  };

  render() {
    const { isLoggedIn } = this.state;
    const { loginUser } = this;
    return <App loginUser={loginUser} isLoggedIn={isLoggedIn} />;
  }

  loginUser = () => {
    this.setState({
      isLoggedIn: true
    });
  };
}

function App({ isLoggedIn, loginUser }) {
  return (
    <div className="App">
      {isLoggedIn ? <Private /> : <Public loginUser={loginUser} />}
    </div>
  );
}

export default AppContainer;
