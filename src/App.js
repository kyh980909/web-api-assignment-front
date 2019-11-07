import React from 'react';
import './App.css';
import Public from './components/public';

class AppContainer extends React.Component {
  state = {
    isLoggedIn: false
  };
  render() {
    const { isLoggedIn } = this.state;
    return <App isLoggedIn={isLoggedIn} />;
  }
}

function App({ isLoggedIn }) {
  return <div className="App">{isLoggedIn ? 'login된 화면' : <Public />}</div>;
}

export default AppContainer;
