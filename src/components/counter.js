import * as React from 'react';
import { connect } from 'react-redux';
import {
  increment,
  incrementBy,
  decrement,
  decrementBy,
  setTo
} from '../store/actions';

class Counter extends React.Component {
  incrementCounter = () => {
    this.props.dispatch(increment());
  };

  incrementByTwo = () => {
    this.props.dispatch(incrementBy(2));
  };

  incrementByFive = () => {
    this.props.dispatch(incrementBy(5));
  };

  decrementCounter = () => {
    this.props.dispatch(decrement());
  };

  decrementByTwo = () => {
    this.props.dispatch(decrementBy(2));
  };

  decrementByFive = () => {
    this.props.dispatch(decrementBy(5));
  };

  setTo100 = () => {
    this.props.dispatch(setTo(100));
  };

  setTo0 = () => {
    this.props.dispatch(setTo(0));
  };

  setToRandom = () => {
    const num = Math.round(Math.random() * 100);

    this.props.dispatch(setTo(num));
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.decrementByFive}>-5</button>
          <button onClick={this.decrementByTwo}>-2</button>
          <button onClick={this.decrementCounter}>-1</button>
          {this.props.currentCount}
          <button onClick={this.incrementCounter}>+1</button>
          <button onClick={this.incrementByTwo}>+2</button>
          <button onClick={this.incrementByFive}>+5</button>
        </div>
        <div>
          <button onClick={this.setTo100}>Set to 100</button>
          <button onClick={this.setTo0}>Set to 0</button>
          <button onClick={this.setToRandom}>Set to random</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCount: state
});

export default connect(mapStateToProps)(Counter);
