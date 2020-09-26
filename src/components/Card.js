import React from 'react';
import likeIcon from '../assets/img/like.svg';

function Card() {
    return (
        <div className="grid grid-cols-2 card--container">
            <div className="col-span-2 p-6">
                <div className="col-span-2">What’s your opinion</div>
                <div className="col-span-2">
                    <h1>Pope Francis?</h1>
                </div>
                <div className="col-span-2 py-3">
                    <h2>He´s talking tough on clergy sexual abuse,
                    but is he just another papal pervert 
                    protector? (thumbs down) or a true 
                    pedophile punishing pontiff? (thumbs up)</h2>
                </div>
                <div className="col-span-2 pb-3">More information</div>
                <div className="col-span-2 pt-4 pb-0">What´s Your Verdict?</div>
            </div>
            <div className="flex flex-col items-center w-full p-4 card__content--button-like">
                <img src={likeIcon} className="card__content--button-like-icon" />
            </div>
            <div className="flex flex-col items-center w-full p-4 card__content--button-not-like">
                <img src={likeIcon} className="card__content--button-like-icon" />
            </div>
        </div>
    )
}

export default Card;