import * as React from 'react';
import { Credits as Props } from '../../types';

import './Credits.css';

const Credits = ({ show }: Props) => {
    if (!show) return null;
    else return (
        <div className="Credits">
            <div>
                <p className="title">Food writer</p>
                <p>Mike Sutter</p>
            </div>
            <div>
                <p className="title">Features Editor</p>
                <p>Emily Spicer</p>
            </div>
            <div>
                <p className="title">Premium Editor</p>
                <p>Graham Watson-Ringo</p>
            </div>
            <div>
                <p className="title">Web Design</p>
                <p>Annie Millerbernd</p>
            </div>
            <div>
                <p className="title">Web Development</p>
                <p>Kia Farhang</p>
            </div>
        </div>
    )
}

export default Credits;