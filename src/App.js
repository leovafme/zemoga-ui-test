import React from 'react';
import './App.css';
import searchIco from './assets/img/search.svg';

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
            <div className="grid grid-cols-12">
            

                <div>1</div>
                <div className="box-border h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">dsada sdsadsa</div>
                <div>9</div>
            </div>
        </div>
    </>
  );
}

export default App;
