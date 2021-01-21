import React from 'react';
import HeroImage from '../assets/images/Hero Image-min.png'

const Hero = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mt-lg-5">
                        <h2 className="hero__heading">Have your best call</h2>
                        <p className="text-white my-5">Fast, Easy, Reliable & Unlimited team chat</p>
                        <button className="btn bg-white px-4 primary">Try it Free</button>
                        <button className="btn px-4 secondary">Demo It</button>
                    </div>
                    <div className="col-lg-7 mt-lg-0 mt-5">
                        <img src={HeroImage} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;