import React from 'react';
import Tabs from './Tabs'
import './bio.css';

const Bio = () => {
    return (
        <div>
        <div className='my-bio'>

        <div className='photo'>
            <img className='my-pic' src='https://images.unsplash.com/photo-1527511908833-40ee19d3a14a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3068cfb9c181dff4664167070cff32c3&auto=format&fit=crop&w=668&q=80' alt='profile' />
        </div>

        <div className='about-me-tabs'>
            <Tabs />
        </div>

        </div>
        </div>
    )
}

export default Bio;