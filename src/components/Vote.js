import React from 'react';
import likeIcon from '../assets/img/like.svg';

function Vote() {
    return (
        <div className="grid grid-cols-2 vote--container text-left">
            <div className="col-span-2 p-6">
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
            <div className="flex flex-col items-center w-full p-4 vote__content--button-like">
                <img src={likeIcon} className="vote__content--button-like-icon" />
            </div>
            <div className="flex flex-col items-center w-full p-4 vote__content--button-not-like">
                <img src={likeIcon} className="vote__content--button-like-icon" />
            </div>
        </div>
    )
}

export default Vote;