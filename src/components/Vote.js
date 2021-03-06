import React, { useEffect, useState, useCallback } from 'react';
import likeIcon from '../assets/img/like.svg';

const Vote = ({data, voteNow, voteAgain}) => {
    const [voteData, setVoteData] = useState({});
    const [currentVote, setCurrentVote] = useState();

    useEffect(() => {
        if (data) {
            const temporal_vote = Object.assign({}, data);
            const temporal_total = data.like + data.notLike;

            temporal_vote.percentage_like = Math.round((data.like * 100) / temporal_total);
            temporal_vote.percentage_not_like = Math.round((data.notLike * 100) / temporal_total);

            setVoteData(temporal_vote);
        }    
    }, [data]);


    const selectVote = useCallback(type => {
        setCurrentVote(type);
    }, []);

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
                    <div className="flex items-end mb-4 vote__container--content-info">
                        <div className="w-5/6">
                            <div>
                                <div className="flex items-center">
                                    <div className="w-10">
                                        {voteData.percentage_like > voteData.percentage_not_like?
                                            <div className="vote__content--button-like  mr-4">
                                                <img src={likeIcon} className="vote__content--button-like-icon" alt={`like ${voteData.title}`} />
                                            </div>
                                            :
                                            <div className="vote__content--button-like not  mr-4">
                                                <img src={likeIcon} className="vote__content--button-like-icon" alt={`not like ${voteData.title}`}/>
                                            </div>
                                        }
                                    </div>
                                    <span className="vote__container-text-title">{voteData.title}</span>
                                </div>
                                
                                <br />
                                <span className="ml-10 vote__container-text-subtitle"><strong>{voteData.ago}</strong> in {voteData.category}</span>
                            </div>
                            <div className="ml-10 py-3">
                                <span className="vote__container-text-description">{voteData.description}</span>
                            </div>

                            <div className="flex flex-row items-center ml-10">
                                {voteData.active?
                                    <>
                                        <div className={`vote__content--button-like ${currentVote? "active": ""} mr-4`} onClick={() => selectVote(true)}>
                                            <img src={likeIcon} className="vote__content--button-like-icon" alt={`like ${voteData.title}`}/>
                                        </div>

                                        <div className={`vote__content--button-not-like ${currentVote === false? "active": ""} mr-4`} onClick={() => selectVote(false)}>
                                            <img src={likeIcon} className="vote__content--button-like-icon" alt={`not like ${voteData.title}`}/>
                                        </div>

                                        <button onClick={() => voteNow(currentVote, voteData.id)} className="bg-transparent text-white font-semibold hover:text-teal-200 py-2 px-4 border border-white hover:teal-200 rounded-none">
                                            Vote now
                                        </button>
                                    </>
                                    :
                                    <button onClick={() => voteAgain(voteData.id)} className="bg-transparent text-white font-semibold hover:text-teal-200 py-2 px-4 border border-white hover:teal-200 rounded-none">
                                        Vote again
                                    </button>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="flex flex-row items-center">
                            <div className="vote__content--metrics-like" style={{width: voteData.percentage_like + "%"}}>
                                <img src={likeIcon} className="vote__content--button-like-icon" alt={`like ${voteData.title}`}/>
                                <span>{voteData.percentage_like}%</span>
                            </div>
                            <div className="vote__content--metrics-like not" style={{width: voteData.percentage_not_like + "%"}}>
                                <span>{voteData.percentage_not_like}%</span>
                                <img src={likeIcon} className="vote__content--button-like-icon" alt={`not like ${voteData.title}`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vote;