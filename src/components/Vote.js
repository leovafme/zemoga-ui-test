import React, { useEffect, useState } from 'react';
import likeIcon from '../assets/img/like.svg';

const Vote = ({data}) => {
    const [voteData, setVoteData] = useState({});

    useEffect(() => {
        if (data) {
            const temporal_vote = Object.assign({}, data);
            const temporal_total = data.like + data.notLike;

            temporal_vote.percentage_like = Math.round((data.like * 100) / temporal_total);
            temporal_vote.percentage_not_like = Math.round((data.notLike * 100) / temporal_total);

            setVoteData(temporal_vote);
        }    
    }, [data])

    return (
        <div
            className="grid grid-cols-2 vote--container text-left"
            style={{
                backgroundImage: "url('"+voteData.image+"')"
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
                                <span className="vote__container-text-title">{voteData.title}</span>
                                <br />
                                <span className="vote__container-text-subtitle">{voteData.ago} in {voteData.category}</span>
                            </div>
                            <div className="col-span-2 py-3">
                                <span className="vote__container-text-description">{voteData.description}</span>
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
                            <div className="vote__content--metrics-like" style={{width: voteData.percentage_like + "%"}}>
                                <img src={likeIcon} className="vote__content--button-like-icon" />
                                <span>{voteData.percentage_like}%</span>
                            </div>
                            <div className="vote__content--metrics-like not" style={{width: voteData.percentage_not_like + "%"}}>
                                <span>{voteData.percentage_not_like}%</span>
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