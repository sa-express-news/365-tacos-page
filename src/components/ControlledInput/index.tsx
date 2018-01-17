import * as React from 'react';
import { ControlledInput as Props } from '../../types';

import './ControlledInput.css';


const ControlledInput = ({ value, onChange, placeholder }: Props) => {
    return (
        <input type="text" placeholder={placeholder} value={value} onInput={onChange as any} />
    )
}

export default ControlledInput;