import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import LoginComponent from '../components/LoginComponent';
import { setLoginState } from "../actions/userActions";

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
`;

class App extends React.Component {
  render() {
    const { user, setLoginState } = this.props;

    return (
      <div>
        <Header
          userLogged={user.logged}
          logout={setLoginState}
        />
        <Container>
          {user.logged ? (
            <MainComponent />
          ) : (
            <LoginComponent login={setLoginState} />
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginState: (loginState) => {
      dispatch(setLoginState(loginState));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

