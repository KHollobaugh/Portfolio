import React from 'react';
import Tabs from './Tabs'

const Bio = () => {
    return (
        <div>
        <div className='my-bio'>

        <div className='photo'>
            <img className='my-pic' src='src/components/bio/profile-pic.jpeg' alt='profile' />
        </div>

        <div className='about-me-tabs'>
            <Tabs />
        </div>

        </div>
        </div>
    )
}

export default Bio;