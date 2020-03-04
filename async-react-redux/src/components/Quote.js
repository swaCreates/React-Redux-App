import React from 'react'
import Loader from 'react-loader-spinner';

import QuoteInfo from './QuoteInfo';

export default function Quote({quote, isFetching, getQuote}) {
    return (
        <div>
            {/* if there is no quote 
            and there is not fetching state === <h2> */}
            
            {!quote && !isFetching && <h2>Fetch a Ron Swon Quote</h2> }

            {/* if there is fetching show this loader animation */}
            {isFetching && 
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />}

            {/* if there is a quote and there is no loading return === component */}
            
            {quote && !isFetching && (
                quote.map(statement => {
                    return <QuoteInfo key={quote.length} quote={statement} />
                })
            )}
            <button onClick={getQuote}>Get Quote</button>
        </div>
    )
}
