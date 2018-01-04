import * as React from 'react';
import Restaurant from '../Restaurant';
import { Restaurant as RestaurantProps } from '../../types';

const RestaurantList = (restaurants: RestaurantProps[]) => {
    const components = restaurants.map((restaurantData: RestaurantProps, index: number) => {
        return <Restaurant
            name={restaurantData.name}
            review={restaurantData.review}
            address={restaurantData.address}
            phone={restaurantData.phone}
            website={restaurantData.website}
            image={restaurantData.image}
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