import * as React from 'react';
import { ControlledInput as Props } from '../../types';


const ControlledInput = ({ value, onChange }: Props) => {
    return (
        <input type="text" value={value} onInput={onChange as any} />
    )
}

export default ControlledInput;