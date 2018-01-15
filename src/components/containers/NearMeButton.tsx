import { connect, Dispatch } from 'react-redux';
import Button from '../Button';
import { AppState } from '../../types';
import { setLocation, SetLocation } from '../../actions';
import { ChangeEvent } from 'react';

const mapDispatchToProps = (dispatch: Dispatch<SetLocation>) => {
    return {
        onClick: () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(setLocation({ latitude, longitude }));
                });
            }
            else {
            }
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Button);