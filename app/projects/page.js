export const metadata = {
    title: 'Projects',
    description: 'FrontEnd Projects',
  }

const Projects = () => {
    return (
        <section className="projects section-padding" id="section_4">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-8 col-12 ms-auto">
                        <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                            <img src="/assets/images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt="" />

                            <h2 className="text-white ms-4 mb-0">Projects</h2>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Branding</small>

                                <h3 className="projects-title">Zoik agency</h3>
                            </div>

                            <span className="popup-image">
                                <img src="/assets/images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" className="projects-image img-fluid" alt="" />
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Photography</small>

                                <h3 className="projects-title">The Watch</h3>
                            </div>

                            <span className="popup-image">
                                <img src="/assets/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" className="projects-image img-fluid" alt="" />
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Website</small>

                                <h3 className="projects-title">Polo</h3>
                            </div>

                            <span className="popup-image">
                                <img src="/assets/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" className="projects-image img-fluid" alt="" />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects;