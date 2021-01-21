import React from 'react';
import CallsImage from '../assets/images/call Image.png';

const Calls = () => {
    return (
        <section className="my-5">
            <div className="container text-center">
                <div className="mx-lg-5">
                    <h5 className="calls__heading">Instant Conference Calls</h5>
                    <p className="text-muted px-lg-5 mx-lg-5 my-4">With reservationless conference calling, you can host regular conference calls whenever you need without pre-scheduling or operator assistance. Your service is always active and ready to use, just dial your dedicated conference number and access codes to invite a call</p>
                    <img src={CallsImage} className="img-fluid mt-5" alt=""/>
                </div>
            </div> 
        </section>
    );
}

export default Calls;