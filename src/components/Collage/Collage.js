import React from 'react';
import { items } from '../../utility/gridItems';

import './Collage.css';

export default function Collage() {
    return (
        <div className="GridContainer">
            {
                items.map(item => (
                    <div key={item.id} className="GridItem">
                        <img src={item.url} alt="Dog" width={50} height={50}/>
                    </div>
                ))
            }
        </div>
    )
}
