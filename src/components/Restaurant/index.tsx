import * as React from 'react';
import { Restaurant as Props } from '../../types';

const Restaurant = ({ name, review, address, otherLocations, phone, website, latitude, longitude, image }: Props) => {
    return (
        <div className="Restaurant">
            <a href={review} title={name}>
                <img src={image} alt={name} />
            </a>
            <h4>{name}</h4>
            <p>{address}</p>
            <p><a href={`tel:+1${phone}`}></a>{phone}</p>
            <p>{website}</p>
        </div>
    )
}

export default Restaurant;