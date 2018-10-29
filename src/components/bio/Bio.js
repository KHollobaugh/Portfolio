import React from 'react';
import Tabs from './Tabs'
import Portrait from '../../img/profile-pic.jpeg';

const Bio = () => {
    return (
        <div>
        <div className='my-bio'>

        <div className='photo'>
            <img className='my-pic' src={Portrait} alt='profile' />
        </div>

        <div className='about-me-tabs'>
            <Tabs />
        </div>

        </div>
        </div>
    )
}

export default Bio;