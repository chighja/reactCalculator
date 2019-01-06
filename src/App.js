import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
