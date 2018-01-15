import { connect } from 'react-redux';
import RestaurantList from '../RestaurantList';
import * as types from '../../types';

import { getGreatCircleDistanceInKM } from '../../util';
import { LatLong } from '../../types';

const getVisibleRestaurants = (restaurants: types.Restaurant[], currentSearch: string, location: types.LatLong | null): types.Restaurant[] => {

    if (currentSearch === '' && !location) {
        return restaurants;
    } else {

        const filterBySearch = (restaurants: types.Restaurant[]): types.Restaurant[] => {
            return restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(currentSearch.toLowerCase()));
        }

        const filterByLocation = (restaurants: types.Restaurant[]): types.Restaurant[] => {
            // First, we create a new restaurant array with distance to current location calculated.

            const restaurantsWithDistancesCalculated = restaurants.map((restaurant) => {
                const restaurantLatLong: types.LatLong = {
                    latitude: restaurant.latitude,
                    longitude: restaurant.longitude
                }
                return Object.assign({}, restaurant, { distance: getGreatCircleDistanceInKM(location as LatLong, restaurantLatLong) });
            });

            // Then, we sort that array on distance to current location and return it.

            return restaurantsWithDistancesCalculated.sort((a: types.Restaurant, b: types.Restaurant): number => {
                return (a.distance as number) - (b.distance as number);
            });
        }

        let restaurantsToReturn = restaurants;

        if (currentSearch !== '') restaurantsToReturn = filterBySearch(restaurantsToReturn);

        if (location !== null) restaurantsToReturn = filterByLocation(restaurantsToReturn);

        return restaurantsToReturn;

    }
}

const mapStateToProps = (state: types.AppState) => ({
    restaurants: getVisibleRestaurants(state.restaurants, state.currentSearch, state.location)
});

const VisibleRestaurantList = connect(
    mapStateToProps
)(RestaurantList)

export default VisibleRestaurantList;