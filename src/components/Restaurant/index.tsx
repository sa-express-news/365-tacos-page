import * as React from 'react';
import { Restaurant as Props } from '../../types';

import { precisionRound } from '../../util';

import './Restaurant.css';

const Restaurant = ({ name, review, address, otherLocations, phone, website, latitude, longitude, image, distance }: Props) => {
    return (
        <div className="Restaurant">
            <a href={review} title={name}>
                <img src={image.replace('920x920', '500x500')} alt={name} />
            </a>
            <div className="info">
                <h4>{name}</h4>
                <p><i className="fas fa-map-marker-alt"></i> {address}</p>
                {/* <p><a href={`tel:+1${phone}`}><i className="fas fa-phone"></i> {phone}</a></p> */}
                {/* {website !== 'None' &&
                    <p><a href={website} title={name}> <i className="fas fa-external-link-alt"></i> Website</a></p>
                } */}
                <p><i className="fas fa-file-alt"></i> <a href={review} title={name}>Read our review</a></p>
                {distance &&
                    <p>{precisionRound(distance * 0.621371, 1)} mi</p>
                }
            </div>
        </div>
    )
}

export default Restaurant;