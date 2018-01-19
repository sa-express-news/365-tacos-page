import * as React from 'react';
import SearchInput from '../containers/SearchInput';
import NearMeButton from '../containers/NearMeButton';

import './AppHeader.css';

const AppHeader = () => {
    const showNearMe = window.location.protocol.includes('https:') && navigator.geolocation;
    return (
        <div className="AppHeader">
            <h1>The ones that were worth the drive</h1>
            <p>Looking for the best tacos in San Antonio? Luckily, Express-News food writer Mike Sutter did all the hard work for you.</p>
            <p>In his 365 Days of Tacos series, Mike visted and reviewed a new taco joint daily throughout 2017. We've gathered the best of them: the restaurants Mike deemed "worth a drive." </p>
            <p>Search for your favorite below{showNearMe ? " or click the 'near me' button to see the high-quality tacos closest to you." : "."} </p>
            <div className="input">
                <SearchInput placeholder='Search 🌮 by name' />
                {showNearMe &&
                    <NearMeButton text="Near me" />
                }
            </div>
        </div>
    )
}

export default AppHeader;