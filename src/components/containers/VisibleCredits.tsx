import { connect } from 'react-redux';
import Credits from '../Credits';
import * as types from '../../types';

const mapStateToProps = (state: types.AppState) => ({
    show: state.showCredits
});

const VisibleCredits = connect(
    mapStateToProps
)(Credits);

export default VisibleCredits;