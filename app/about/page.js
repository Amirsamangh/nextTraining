import React from 'react';

const About = () => {
    return (
        <>
            <section className="about section-padding" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <img src="/assets/images/couple-working-from-home-together-sofa.jpg" className="about-image img-fluid" alt="" />
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">

                                <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4 d-flex justify-content-between">
                                    <h2 className="text-white mx-4 mb-0">My Story</h2>
                                    <img src="/assets/images/me2.jpg" className="avatar-image img-fluid" alt="" />
                                </div>

                                <h3 className="pt-2 mb-3">a little bit about Amirsaman</h3>

                                <p>AmirSaman is a self-taught developer with over a year of experience. He has solid knowledge of HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind CSS, Bootstrap, and Next.js. He is familiar with TypeScript and has a strong understanding of frontend development.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="featured section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <div className="profile-thumb">
                                <div className="profile-title">
                                    <h4 className="mb-0">Information</h4>
                                </div>

                                <div className="profile-body">
                                    <p>
                                        <span className="profile-small-title">Name</span>
                                        <span>Amirsaman Gharechahi</span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Birthday</span>
                                        <span>Nov 13, 1996</span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Phone</span>
                                        <span><a href="tel: 917-556-3670">917-556-3670</a></span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Email</span>
                                        <span><a href="mailto:ghrechahi72@gmail.com">ghrechahi72@gmail.com</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">
                                <div className="row">
                                    <div className="col-lg-6 col-6 featured-border-bottom py-2">
                                        <strong className="featured-numbers">1+</strong>

                                        <p className="featured-text">Years of Experiences</p>
                                    </div>

                                    <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                                        <strong className="featured-numbers">0</strong>

                                        <p className="featured-text">Happy Customers</p>
                                    </div>

                                    <div className="col-lg-6 col-6 pt-4">
                                        <strong className="featured-numbers">5</strong>

                                        <p className="featured-text">Project Finished</p>
                                    </div>

                                    <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                                        <strong className="featured-numbers">0</strong>

                                        <p className="featured-text">Digital Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="clients section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12">
                        <h3 className="text-center mb-5">Companies I've had worked</h3>
                    </div>

                    <div className="col-lg-2 col-4 ms-auto clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/clients/cachet.svg" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/clients/guitar-center.svg" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/clients/tokico.svg" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/clients/shopify.svg" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 me-auto clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/clients/profil-rejser.svg" className="clients-image img-fluid" alt=""/>
                    </div>

                </div>
            </div>
        </section>
        </>

    );
}

export default About;