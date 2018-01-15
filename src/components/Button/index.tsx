import * as React from 'react';
import { Button as Props } from '../../types';

const Button = ({ text, onClick }: Props) => {
    return (
        <button onClick={onClick as any}>
            {text}
        </button>
    )
}

export default Button;