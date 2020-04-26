import React from 'react'

import './QuoteInfo.scss';

export default function QuoteInfo({quote}) {


    return (
        <div className='quoteInfo-container'>
            <p>" {quote} "</p>
        </div>
    )
}
