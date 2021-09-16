import React from 'react';
import { FaPaw } from 'react-icons/fa';
import './Paws.css';

export default function Paws(props) {
    return (
        <div className={`${props.className} Paws`}>
            <div>
                <FaPaw />
            </div>
            <div>
                <FaPaw />
            </div>
        </div>
    )
}
