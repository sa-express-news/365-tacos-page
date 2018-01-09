import { connect } from 'react-redux';
import RestaurantList from '../RestaurantList';
import * as types from '../../types';

const getVisibleRestaurants = (restaurants: types.Restaurant[], currentSearch: string, location: types.LatLong | null): types.Restaurant[] => {
    if (currentSearch !== '') {
        return restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(currentSearch.toLowerCase()));
    }
    return restaurants;
}

const mapStateToProps = (state: types.AppState) => ({
    restaurants: getVisibleRestaurants(state.restaurants, state.currentSearch, state.location)
});

const VisibleRestaurantList = connect(
    mapStateToProps
)(RestaurantList)

export default VisibleRestaurantList;