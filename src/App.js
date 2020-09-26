import React from 'react';
import './App.css';
import searchIco from './assets/img/search.svg';
import cancelIco from './assets/img/cancel.svg';
import facebookIco from './assets/img/facebook.svg';
import twitterIco from './assets/img/twitter.svg';
import Card from "./components/Card";
import Vote from "./components/Vote";

function App() {
  return (
    <>
        <div className="lg:container lg:mx-auto section--background">
            <nav className="flex items-center justify-between flex-wrap p-6 header">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Rule of Thumb.</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block lg:flex lg:items-end lg:w-auto">
                    <div className="text-sm lg:flex-grow header--text-size">
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-8">
                            Past Trials
                        </a>
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-8">
                            How It Works
                        </a>
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200">
                            Log In 
                        </a>
                        <span className="text-white"> / </span>
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200">
                            Sign Up
                        </a>

                        <img className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-8 header--button-search" src={searchIco}></img>
                    </div>
                </div>
            </nav>
            
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="h-10 col-span-2"></div>
                <div className="w-full p-6">
                    <Card/>
                </div>
                <div className="w-full p-6"></div>
            </div>

            <div className="h-10"></div>
            
            
            <div className="flex mb-12 justify-center items-center">
                <div className="w-4/12 p-1 text-right home__section--closing-left">
                    <div className="text mr-2">CLOSING IN</div>
                </div>
                <div className="w-8/12 p-1 text-left home__section--closing-right">
                    <div className="text ml-4">22 days</div>
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
                        <img src={cancelIco} width="20" />
                    </p>
                </div>
            </div>

            <h2 className="block my-10 text-3xl m-6 mb-4">Votes</h2>


            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2">
                    <div className="m-6">
                        <Vote />
                    </div>
                </div>
                
                <div className="w-full sm:w-1/2">
                    <div className="m-6">
                        <Vote />
                    </div>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="m-6">
                        <Vote />
                    </div>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="m-6">
                        <Vote />
                    </div>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="m-6">
                        <Vote />
                    </div>
                </div>
            </div>

            <div className="flex mb-4 m-6 home__submit_name items-center">
                <div className="w-5/6 p-2 text-left">
                    <p className="bg-transparent text-black font-semibold py-2 px-4 rounded-none text-2xl">
                        Is there anyone else you would want us to add?
                    </p>
                    
                </div>
                <div className="w-1/6 p-2 text-center">
                    <button className="bg-transparent text-black font-semibold hover:text-white py-2 px-4 border border-black hover:bg-black rounded-none">
                        Submit a Name
                    </button>
                </div>
            </div>

            <footer className="footer__app m-6">
                <br />
                <div className="footer__app--separator px-10"></div>
                <br />
                <div className="flex items-center justify-between flex-wrap">
                    <div className="text-sm lg:flex-grow header--text-size">
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-8">
                            Terms and Conditions
                        </a>
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-8">
                            Privacy Policy
                        </a>
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-8">
                            Contact Us
                        </a>
                    </div>
                    <div className="text-sm lg:flex-grow header--text-size flex items-center justify-end">
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-8">
                            Follow Us
                        </a>
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-8">
                            <img src={facebookIco} width="30" />
                        </a>
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500">
                            <img src={twitterIco} width="30" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
        
    </>
  );
}

export default App;
