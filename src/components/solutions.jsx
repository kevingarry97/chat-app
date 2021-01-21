import React from 'react';
import SolutionsImage from '../assets/images/solutionsImage-min.png';

function Solutions() {
    return (
        <section className="solutions__section">
            <div className="container-fluid pl-0">
                <div className="row mt-5">
                    <div className="col-lg-6 mb-4">
                        <img src={SolutionsImage} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-4 mt-md-5 pt-md-5">
                        <h4 className="solutions__header">Perfect Solution for Small Bussiness</h4>
                        <h6 className="mt-5 text-muted mb-5">Pricing plan that fits like glove</h6>
                        <button className="btn px-4 solutions__primary font-weight-bold" style={{ borderRadius: 50}}>Try it Free</button>
                        <button className="btn px-4 solutions__secondary font-weight-bold" style={{ borderRadius: 50}}>Demo It</button>
                            <div className="row mt-5">
                                <div className="col-3">
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <p className="text-muted"><strong>5, 200 businesses</strong> use ChatApp and they rate it as <strong>5-stars</strong></p>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Solutions;