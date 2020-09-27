import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import cancelIco from './assets/img/cancel.svg';
import Card from "./components/Card";
import Vote from "./components/Vote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { data as votesData } from './assets/mocks/data';
import { data as homeData } from './assets/mocks/data-initial';

const App = () => {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        // search storage data
        const storageData = sessionStorage.getItem('votes_data');
        if (storageData) {
            setVotes(JSON.parse(storageData));
        } else {
            setVotes(votesData);
            // save data in storage
            sessionStorage.setItem('votes_data', JSON.stringify(votesData));
        }
    }, []);

    const voteNow = useCallback((vote, id) => {
        let tempVotes = Object.assign([], votes)
        // find record by id
        const indexId = tempVotes.findIndex(item => item.id === id);

        if (vote) {
            tempVotes[indexId].like += 1; 
        } else if (vote === false) {
            tempVotes[indexId].notLike += 1; 
        }

        tempVotes[indexId].active = false;

        setVotes([...tempVotes]);
        // save data in storage
        sessionStorage.setItem('votes_data', JSON.stringify(tempVotes));

    }, [votes]);

    const voteAgain = useCallback(id => {
        let tempVotes = Object.assign([], votes)
        // find record by id
        const indexId = tempVotes.findIndex(item => item.id === id);

        tempVotes[indexId].active = true;

        setVotes([...tempVotes]);
        // save data in storage
        sessionStorage.setItem('votes_data', JSON.stringify(tempVotes));

    }, [votes]);

    return (
        <>
            <div
                className="lg:container lg:mx-auto section--background"
                style={{
                    backgroundImage: "url('"+homeData.image+"')"
                }}
            >
                {/* header */}
                <Header />
                
                <div className="h-10"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="w-full p-6">
                        <Card title={homeData.title} description={homeData.description}/>
                    </div>
                    <div className="w-full p-6 hidden lg:inline-block"></div>
                </div>

                <div className="h-10"></div>
                
                {/* closing in days */}
                <div className="flex mb-12 justify-center items-center">
                    <div className="w-4/12 p-1 text-right home__section--closing-left">
                        <div className="text mr-2">CLOSING IN</div>
                    </div>
                    <div className="w-8/12 p-1 text-left home__section--closing-right">
                        <div className="text ml-4"><strong>22</strong> days</div>
                    </div>
                </div>
            </div>

            <div className="lg:container lg:mx-auto">
                <div className="md:flex p-3 home__section--message m-6">
                    <div className="flex items-center md:flex-shrink-0">
                        <div className="rounded-lg md:w-56">
                            <span className="home__section--message-text1">Speak out. Be heard.</span>
                            <br />
                            <span className="home__section--message-text2 font-bold">Be counted</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 md:ml-6">
                        <p className="mt-2">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It´s easy: You share your opinion, we analyze and put the data in a public report.</p>
                    </div>

                    <div className="flex items-center mt-1 md:mt-0 md:ml-6">
                        <p className="mt-2 cursor-pointer">
                            <img src={cancelIco} width="20" alt="close" />
                        </p>
                    </div>
                </div>

                {/* votes section */}
                <h2 className="block my-10 m-6 mb-4 text-4xl">Votes</h2>

                <div className="flex flex-wrap">
                    {votes.map((vote, index) => (
                        <div key={index} className="w-full sm:w-1/2">
                            <div className="m-6">
                                <Vote data={{...vote}} voteNow={voteNow} voteAgain={voteAgain} />
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* footer section */}
                <Footer />
            </div>
            
        </>
    );
}

export default App;
