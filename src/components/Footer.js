import React from 'react';
import facebookIco from '../assets/img/facebook.svg';
import twitterIco from '../assets/img/twitter.svg';

function Footer() {
    return (
        <>
            <div className="flex mb-4 m-6 home__submit_name items-center">
                <div className="w-6/6 sm:w-5/6 p-2 text-left">
                    <p className="bg-transparent text-black font-semibold py-2 px-4 rounded-none text-2xl">
                        Is there anyone else you would want us to add?
                    </p>
                    
                </div>
                <div className="w-2/2 sm:w-1/2 p-2 text-right">
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
                            <img src={facebookIco} width="30" alt="facebook"/>
                        </a>
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500">
                            <img src={twitterIco} width="30" alt="twitter"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;