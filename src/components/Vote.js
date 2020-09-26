import React from 'react';
import likeIcon from '../assets/img/like.svg';

function Vote() {
    return (
        <div
            className="grid grid-cols-2 vote--container text-left"
            style={{
                backgroundImage: "url('./images/kanye_west.jpg')"
            }}
        >
            <div className="col-span-2">
                <div className="col-span-2 h-48 hidden md:block"></div>
                <div className="w-full vote__container-text">
                    <div className="flex mb-4">
                        <div className="w-10">
                            <div className="h-5"></div>
                            <div className="vote__content--button-like  mr-4">
                                <img src={likeIcon} className="vote__content--button-like-icon" />
                            </div>
                        </div>
                        <div className="w-5/6">
                            <div className="col-span-2">
                                <span className="vote__container-text-title">Pope Francis?</span>
                                <br />
                                <span className="vote__container-text-subtitle">Pope Francis?</span>
                            </div>
                            <div className="col-span-2 py-3">
                                <span className="vote__container-text-description">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</span>
                            </div>

                            <div className="flex flex-row items-center">
                                <div className="vote__content--button-like  mr-4">
                                    <img src={likeIcon} className="vote__content--button-like-icon" />
                                </div>
                                <div className="vote__content--button-not-like  mr-4">
                                    <img src={likeIcon} className="vote__content--button-like-icon" />
                                </div>

                                <button className="bg-transparent text-white font-semibold hover:text-teal-200 py-2 px-4 border border-white hover:teal-200 rounded-none">
                                    Vote now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="flex flex-row items-center">
                            <div className="vote__content--metrics-like" style={{width: 64 + "%"}}>
                                <img src={likeIcon} className="vote__content--button-like-icon" />
                                <span>64%</span>
                            </div>
                            <div className="vote__content--metrics-like not" style={{width: 36 + "%"}}>
                                <span>36%</span>
                                <img src={likeIcon} className="vote__content--button-like-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}

export default Vote;