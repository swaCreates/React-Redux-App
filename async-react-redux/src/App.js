import React from 'react';
import './App.scss';

import { connect } from 'react-redux';

import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
}

const mapStateToProps= state => {
  return{
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {}
)(App);
