import React from 'react';

import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import Collage from '../Collage/Collage';
import Paws from '../Paws/Paws';

import mainDog from '../../images/main-dog.webp';
import additionalDog from '../../images/happy-dog.webp';
import headerDog from '../../images/dog.webp';
import healthDog from '../../images/healthy_dog.webp';
import heart from '../../images/heart.webp';
import {FaPaw} from 'react-icons/fa';

import './Main.css';

export default function Main() {

    return (
        <div className="MainContainer">
            <header>
                <Nav/>
            </header>

            <div className="Row">
                <div className="MainPicture">
                    <img src={mainDog} alt="Happy Dog" width={300} height={454}/>
                </div>
                <div className="MainHeader">
                    <div className="HeaderContent">
                        <img src={headerDog} alt="Happy Dog" width={40} height={45}/>
                        <div className="HeaderGroup">
                            <h1>YOU CANT BUY</h1>
                            <div>
                                <p>L<FaPaw/>VE !</p>
                                <Paws className="Small BluePaws"/>
                            </div>
                            <h2>TO BE PET FRIEND, ADOPT PET.</h2>
                        </div>
                    </div>
                    <div className="HeaderActions">
                        <button type="button">ADOPT PET</button>
                    </div>
                </div>
                <div className="AdditionalPictures">
                    <img id="dogHeart" src={heart} alt="Heart" width={30} height={30}/>
                    <img id="dogPicture" src={additionalDog} alt="Happy Dog" width={500} height={468}/>
                </div>
            </div>

            <div className="CardContainer">
                <Card
                    dog={healthDog}
                    heart={heart}
                    header="Pet Health"
                    info={["Detail", "Call"]}
                />
            </div>

            <div className="Collage">
                <Collage/>
            </div>

            <div className="TopPaws">
                <Paws className="Medium BluePaws"/>
            </div>

            <div className="LargerPaws">
                <Paws/>
            </div>

            <div className="LeftPaws">
                <Paws className="Medium YellowPaws"/>
            </div>
        </div>
    )
}
