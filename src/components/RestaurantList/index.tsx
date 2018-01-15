import * as React from 'react';
import Restaurant from '../Restaurant';
import { Restaurant as RestaurantProps } from '../../types';

import './RestaurantList.css';

interface Props {
    restaurants: RestaurantProps[];
}

const RestaurantList = ({ restaurants }: Props) => {
    const components = restaurants.map((restaurantData: RestaurantProps, index: number) => {
        return <Restaurant
            name={restaurantData.name}
            review={restaurantData.review}
            address={restaurantData.address}
            phone={restaurantData.phone}
            website={restaurantData.website}
            image={restaurantData.image}
            latitude={restaurantData.latitude}
            longitude={restaurantData.longitude}
            distance={restaurantData.distance}
            key={index}
        />
    });

    return (
        <div className="RestaurantList">
            {components}
        </div>
    )
}

export default RestaurantList;