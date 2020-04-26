
const initialState= {
    quote: null,
    isFetching: false,
    error: '',
}

export const quoteReducer= (state = initialState, action) => {
    switch(action.type){
        case 'FETCHING_QUOTE':
            return{
                ...state,
                isFetching: true,
            }
        case 'FETCHING_QUOTE_SUCCESS':
            return{
                ...state,
                isFetching: false,
                quote: action.payload,
            }
        case 'FETCHING_QUOTE_FAILURE':
            return{
                ...state,
                error: "Sorry. Couldn't get quote."
            }
        default:
            return state
    }
}