import React from 'react';

import './Card.css';

export default function Card(props) {
    return (
        <div className="Card">
            <div className="CardImage">
                <img id="healthyHeart" src={props.heart} alt="Heart" width={30} height={30}/>
                <img id="healthyDog" src={props.dog} alt="Dog" width={100} height={107}/>
            </div>
            <div className="CardContent">
                <h2>{props.header}</h2>
                <div className="CardInfo">
                    <ul>
                        {
                            props.info.map((info, index) => (
                                <li key={index}>{info}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
