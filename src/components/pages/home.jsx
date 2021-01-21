import React from 'react';
import Navbar from '../navbar';
import '../css/home.css';
import Hero from '../hero';
import Calls from '../calls';
import Solutions from '../solutions';
import Footer from '../footer';

const Home = () => {
    return (
        <>
            <section className="hero__section">
                <Navbar />
                <Hero />
            </section>
            <main className="mt-5">
                <Calls />
                <Solutions />
            </main>
            <Footer />
        </>
    );
}

export default Home;