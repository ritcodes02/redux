import React from 'react'
import { connect } from 'react-redux';
import {increment, decrement} from './Redux/action';  

function App({ count, increment, decrement}) {
  return (
    <div className="App">
      <h1>Counter Redux App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

    </div>
  )
} 

const mapStateToProps = (state)=>({
  count: state.counter,
});

const mapDispatchToProps ={
  increment,
  decrement,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);