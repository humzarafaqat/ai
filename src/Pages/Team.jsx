import React from 'react'

const Team = () => {
  return (
    <div>
               <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 animated slideInRight">Teams</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="/#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="/#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Teams</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-end">
                    <img className="img-fluid" src="img/hero-img.png" style={{ maxHeight: '300px'}} alt="Images" />
                </div>
            </div>
        </div>
        </div>
       <div className="container-fluid bg-light py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Team</div>
                    <h1 className="mb-4">Meet Our Experienced Team Members</h1>
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
                                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                                        <img className="img-fluid rounded-circle p-4" src="img/team-1.jpg" alt="Images" />
                                        <h5 className="mb-0">Boris Johnson</h5>
                                        <small>Founder & CEO</small>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                                        <img className="img-fluid rounded-circle p-4" src="img/team-2.jpg" alt="Images" />
                                        <h5 className="mb-0">Adam Crew</h5>
                                        <small>Executive Manager</small>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-md-4">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                                        <img className="img-fluid rounded-circle p-4" src="img/team-3.jpg" alt="Images" />
                                        <h5 className="mb-0">Kate Winslet</h5>
                                        <small>Co Founder</small>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                                        <img className="img-fluid rounded-circle p-4" src="img/team-4.jpg" alt="Images" />
                                        <h5 className="mb-0">Cody Gardner</h5>
                                        <small>Project Manager</small>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-primary m-1" href="/#"><i
                                                    className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Team
