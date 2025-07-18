import React from 'react';
import Travel from '../assets/Traveler.png';
import './BigImage.css';
import play from '../assets/Play button.png'
const BigImage = () => {
    return (
        <div className="BigImageContainer">
            <div className="text-block">
                <div className='Text1'>Best Destinations around the world</div>
                <div className='Text2'>Travel, enjoy<br />and live a new<br />and full life</div>
                <div className='Text3'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</div>
                <div className='buttons'>
                    <button className='find-more'>Find out more</button>
                    <img src={play} alt='Play' />
                    <button className='play-demo'>Play Demo</button>
                </div>
            </div>

            <img src={Travel} alt='Traveler' className='TravelerImage' />
        </div>
    );
};

export default BigImage;