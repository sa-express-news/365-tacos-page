import { connect, Dispatch } from 'react-redux';
import Button from '../Button';
import { AppState } from '../../types';
import { setLocation, SetLocation } from '../../actions';
import { ChangeEvent } from 'react';

export interface Props {
    text: string;
}

const mapDispatchToProps = (dispatch: Dispatch<SetLocation>, { text }: Props) => {
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
        },
        text
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Button);