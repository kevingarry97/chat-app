import React from 'react';

const Footer = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <a className="navbar-brand text-primary" style={{ fontSize: 25}}><strong>chat</strong><span>app</span></a>
                        <h6 className="text-muted mt-3">The last team chat you <br/> will ever need</h6>
                    </div>
                    <div className="col-lg-2">
                        <h6 className="text-muted mt-3">Help</h6>
                        <ul class="nav flex-column mt-4">
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2"> Support</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">Knowledgeable</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">Tutorials</h6></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h6 className="text-muted mt-3">Features</h6>
                        <ul class="nav flex-column mt-4">
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">Screen Sharing</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">IOS & Android</h6> </a>
                            </li>
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">File Sharing</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">User Management</h6></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h6 className="text-muted mt-3">Company</h6>
                        <ul class="nav flex-column mt-4">
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">About Us</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">Careers</h6> </a>
                            </li>
                            <li class="nav-item">
                                <a class="text-muted" href="#"><h6 className="py-2">Contact Us</h6></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h6 className="text-muted mt-3">Contact Us</h6>
                        <ul class="nav flex-column mt-4">
                            <li class="nav-item">
                                <h6 className="text-muted py-2">info@gmail.com</h6>
                            </li>
                            <li class="nav-item">
                                <h6 className="text-muted py-2">(+250) 784 283 473</h6> 
                            </li>
                            <li class="nav-item">
                                <h6 className="text-muted py-2" style={{ fontSize: 15}}>KK 564 St, Kigali-Rwanda</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="clearfix">
                    <div className="float-left">
                        <small className="text-muted">© Copyright ChatApp Inc,</small>
                    </div>
                    <div className="float-right">
                        <i className="text-muted fa fa-facebook px-2"></i>
                        <i className="text-muted fa fa-google-plus px-2"></i>
                        <i className="text-muted fa fa-instagram px-2"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;