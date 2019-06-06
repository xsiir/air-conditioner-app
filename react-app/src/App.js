import React from 'react';
import Provider from "react-redux/es/components/Provider";
import store from "./store";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <Provider store={store}>
    <MainComponent/>
    </Provider>
  );
}

export default App;
