import React from 'react';

export const metadata = {
    title: 'About',
    description: 'FrontEnd web developer, HTML CSS Bootstrap Tailwind Javascript Typescript React.js Next.js',
  }

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

                                <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4 d-flex">
                                    <h2 className="text-white mx-4 mb-0">درباره من</h2>
                                    <img src="/assets/images/me1.jpg" className="avatar-image img-fluid" alt="" />
                                </div>

                                <h3 className="pt-2 mb-3 dir_rtl">کمی توضیح در مورد من</h3>

                                <p className='dir_rtl text_md'>من یه برنامه نویس وب آشنا با بسیاری از تکنولوژی های فرانت اند از جمله HTML, CSS, Bootstrap, Tailwind, Javascript, Typescript, react.js, Next.js هستم واین وبسایت رو با Next.js نوشتم <br />
                                <hr />
                                مهارت های دیگر : <br /> <br />
                                 <span className='dir_rtl'>
                                 webpack, vite, axios, api, redux, context api, shadcn, git, github, responsive design
                                 </span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="featured section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <div className="profile-thumb dir_rtl">
                                <div className="profile-title ">
                                    <h4 className="mb-0 text_3xl">مشخصات</h4>
                                </div>

                                <div className="profile-body ">
                                    <p className='text_md'>
                                        <span className="profile-small-title">نام</span>
                                        <span>امیرسامان قره چاهی</span>
                                    </p>

                                    <p className='text_md'>
                                        <span className="profile-small-title">تاریخ تولد</span>
                                        <span>23 آبان 1375</span>
                                    </p>

                                    <p className='text_md'>
                                        <span className="profile-small-title">شماره تماس</span>
                                        <span><a href="tel: +98917556670">09175563670</a></span>
                                    </p>

                                    <p className='text_md'>
                                        <span className="profile-small-title">ایمیل</span>
                                        <span><a href="mailto:ghrechahi72@gmail.com">ghrechahi72@gmail.com</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">
                                <div className="row">
                                    <div className="col-lg-6 col-6 featured-border-bottom py-2">
                                        <strong className="featured-numbers">2+</strong>

                                        <p className="featured-text text_md">سالهای تحربه</p>
                                    </div>

                                    {/* <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                                        <strong className="featured-numbers">0</strong>

                                        <p className="featured-text">Happy Customers</p>
                                    </div> */}

                                    <div className="col-lg-6 col-6 pt-4">
                                        <strong className="featured-numbers">5</strong>

                                        <p className="featured-text text_md">پروژه های انجام شده</p>
                                    </div>

                                    {/* <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                                        <strong className="featured-numbers">0</strong>

                                        <p className="featured-text">Digital Awards</p>
                                    </div> */}
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
                        <h3 className="text-center mb-5 text_3xl">تکنولوژی ها و مهارت ها</h3>
                    </div>

                    <div className="col-lg-2 col-4 ms-auto clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/html.png" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/css.png" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/BS.png" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/js.png" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 me-auto clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/ts.png" className="clients-image img-fluid" alt=""/>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-2 col-4 ms-auto clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/react.png" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/redux.png" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/sass.png" className="clients-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/next.png" className="clients-image img-fluid scale_2" alt=""/>
                    </div>

                    <div className="col-lg-2 col-4 me-auto clients-item-height cursor-pointer d-flex align-items-center">
                        <img src="/assets/images/logos/tailwind.png" className="clients-image img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
}

export default About;