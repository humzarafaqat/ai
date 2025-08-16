import React from 'react'

const Project = () => {
  return (
    <div>
       <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 animated slideInRight">Projects</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="/#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="/#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Projects</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-end">
                    <img className="img-fluid" src="img/hero-img.png" style={{ maxHeight: '300px'}} alt="Images" />
                </div>
            </div>
        </div>
    </div><div className="container-fluid bg-light py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
                    <h1 className="mb-4">Our Excellent AI Solutions for Your Business</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <a className="btn btn-primary rounded-pill px-4" href="/#">Read More</a>
                </div>
                <div className="col-lg-7">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon btn-square">
                                            <i className="fa fa-robot fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">Robotic Automation</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                            diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="/#">Read More</a>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon btn-square">
                                            <i className="fa fa-power-off fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">Machine learning</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                            diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="/#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-md-4">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon btn-square">
                                            <i className="fa fa-graduation-cap fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">Education & Science</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                            diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="/#">Read More</a>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon btn-square">
                                            <i className="fa fa-brain fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">Predictive Analysis</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                            diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="/#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       <div className="container-fluid bg-light py-5">
        <div className="container py-5">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Case Study</div>
                <h1 className="mb-4">Explore Our Recent AI Case Studies</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="case-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/project-1.jpg" alt="Images" />
                        <a className="case-overlay text-decoration-none" href="/#">
                            <small>Robotic Automation</small>
                            <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                            </h5>
                            <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="case-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/project-2.jpg" alt="Images" />
                        <a className="case-overlay text-decoration-none" href="/#">
                            <small>Machine learning</small>
                            <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                            </h5>
                            <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                    <div className="case-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/project-3.jpg" alt="Images" />
                        <a className="case-overlay text-decoration-none" href="/#">
                            <small>Predictive Analysis</small>
                            <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                            </h5>
                            <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Project
