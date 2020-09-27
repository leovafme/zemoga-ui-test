import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";

const WhitePage = ({page}) => {
    return (
        <>
            <div
                className="lg:container lg:mx-auto"
            >
                {/* header */}
                <Header />

                <h1>{page}</h1>

                {/* footer */}
                <Footer />
            </div>
        </>
    )
}

export default WhitePage;
