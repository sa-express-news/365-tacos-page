import { connect } from 'react-redux';
import RestaurantList from '../RestaurantList';
import * as types from '../../types';

const getVisibleRestaurants = (restaurants: types.Restaurant[], filter: string, location: types.LatLong): types.Restaurant[] => {
    return restaurants;
}

const mapStateToProps = (state: types.AppState) => ({
    restaurants: getVisibleRestaurants(state.restaurants, state.activeFilter, state.location)
});

const VisibleRestaurantList = connect(
    mapStateToProps
)(RestaurantList)

export default VisibleRestaurantList;