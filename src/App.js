import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
