import React from 'react';
import './App.scss'; 

import { connect } from 'react-redux';

import {getQuote} from './actions';

import Quote from './components/Quote';

function App({quote, isFetching, error, getQuote}) {
  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <Quote quote={quote} getQuote={getQuote} error={error} isFetching={isFetching} />
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
  {getQuote}
)(App);
