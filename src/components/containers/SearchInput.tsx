import { connect, Dispatch } from 'react-redux';
import ControlledInput from '../ControlledInput';
import { AppState } from '../../types';
import { setSearchTerm, SetSearchTerm } from '../../actions';
import { ChangeEvent } from 'react';

const mapStateToProps = (state: AppState) => ({
    value: state.currentSearch
});

const mapDispatchToProps = (dispatch: Dispatch<SetSearchTerm>) => {
    return {
        onChange: (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchTerm(event.target.value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlledInput);