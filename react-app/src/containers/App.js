import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import LoginComponent from '../components/LoginComponent';
import { setName, logout } from "../actions/userActions";

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
`;

class App extends React.Component {
  componentWillMount() {
    const { user } = this.props;
    const username = localStorage.getItem('user');

    if (username && !user.name) {
      this.props.setName(username);
    }
  }

  render() {
    const { user, setName, logout } = this.props;
    const isLogged = localStorage.getItem('user');

    return (
      <div>
        <Header
          userLogged={isLogged}
          logout={logout}
        />
        <Container>
          {isLogged ? (
            <MainComponent username={user.name} />
          ) : (
            <LoginComponent login={(name) => setName(name)} />
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch(setName(name)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

