import { connect, Dispatch } from 'react-redux';
import Button from '../Button';
import { AppState } from '../../types';
import { setLocation, SetLocation, ToggleCredits, toggleCredits } from '../../actions';

export interface Props {
    text: string;
}

const mapDispatchToProps = (dispatch: Dispatch<ToggleCredits>, { text }: Props) => {
    return {
        onClick: () => {
            dispatch(toggleCredits())
        },
        text
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Button);