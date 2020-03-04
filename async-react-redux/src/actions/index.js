import axios from "axios";

export const getQuote= () => dispatch => {

  // initially send the action FETCHING_QUOTE so that we
  // get our state updated to support a fetch

    dispatch({type: 'FETCHING_QUOTE'});

    axios
    .get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
    .then(res => {
        // console.log(res.data);

       // send the action FETCHING_QUOTE_SUCCESS and update state
      // to show the fetched data

      dispatch({
          type: 'FETCHING_QUOTE_SUCCESS',
          payload: res.data,
        })
    })
    .catch(err =>{
        console.log('This is my error: ', err);

        // send the action FETCHING_QUOTE_FAILURE and update state
        // to show the error message

        dispatch({
            type: 'FETCHING_QUOTE_FAILURE',
        })
    })
    
}