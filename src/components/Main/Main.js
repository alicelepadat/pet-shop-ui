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
import { FaPaw } from 'react-icons/fa';

import './Main.css';

export default function Main() {
    return (
        <div className="MainContainer">
            <Nav />
            <div className="CardContainer">
                <Card
                    dog={healthDog}
                    heart={heart}
                    header="Pet Health"
                    info={["Detail", "Call"]}
                />
            </div>
            <div className="Row">
                <div className="MainPicture">
                    <img src={mainDog} alt="Happy Dog" />
                </div>
                <div className="MainHeader">
                    <div className="HeaderPaws">
                        <Paws className="Small BluePaws" />
                    </div>
                    <img src={headerDog} alt="Happy Dog" />
                    <hgroup>
                        <h1>YOU CANT BUY <span>L<FaPaw />VE !</span> </h1>
                        <h2>TO BE PET FRIEND, ADOPT PET.</h2>
                    </hgroup>
                    <button type="button">ADOPT PET</button>
                </div>
                <div className="AdditionalPictures">
                    <img id="dogHeart" src={heart} alt="Heart" />
                    <img id="dogPicture" src={additionalDog} alt="Happy Dog" width={500} height={468} />
                </div>
            </div>
            <div className="Collage">
                <Collage />
            </div>
            <div className="TopPaws">
                <Paws className="Medium BluePaws" />
            </div>
            <div className="Paws">
                <Paws />
            </div>
            <div className="LeftPaws">
                <Paws className="Medium YellowPaws" />
            </div>
        </div>
    )
}
