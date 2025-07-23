
import Skills from '@/components/about/skills';
import React from 'react';
import IntroTable from '@/components/about/IntroTable';
import SpecTable from '@/components/about/SpecTable';

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
                            <img src="/assets/images/me_wide3.jpg" className="about-image img-fluid h-75" alt="" />
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">

                                <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4 d-flex">
                                    <h2 className="text-white mx-4 mb-0">درباره من</h2>
                                    <img src="/assets/images/me2.jpg" className="avatar-image img-fluid" alt="" />
                                </div>

                                <h3 className="pt-2 mb-3 dir_rtl">چه چیز هایی بلدم؟</h3>

                                <div className='dir_rtl'>
                                    <p className='text_md'>
                                    من یه برنامه نویس وب آشنا با بسیاری از تکنولوژی های فرانت اند از جمله HTML, CSS, Bootstrap, Tailwind, Javascript, Typescript, react.js, Next.js هستم واین وبسایت رو با Next.js نوشتم 
                                    </p>
                                </div>
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
                                    <IntroTable
                                        title='نام'
                                        description='امیرسامان قره چاهی'
                                    />
                                    <IntroTable
                                        title='تاریخ تولد'
                                        description='23 آبان 1375'
                                    />
                                    <IntroTable
                                        title='شماره تماس'
                                        description={<a href="tel: +98917556670">09175563670</a>}
                                    />
                                    <IntroTable
                                        title='ایمیل'
                                        description={<a href="mailto:ghrechahi72@gmail.com">ghrechahi72@gmail.com</a>}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">
                                <div className="row">
                                    <SpecTable
                                        title={'سالهای تحربه'}
                                        description={'2+'}
                                    />
                                    <SpecTable
                                        title={'پروژه های انجام شده'}
                                        description={'5'}
                                    />
                                    {/* <SpecTable
                                        title={'مشتری های راضی'}
                                        description={'0'}
                                    />
                                    <SpecTable
                                        title={'جوایز'}
                                        description={'0'}
                                    /> */}
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
                    <Skills image='html.png' />
                    <Skills image='css.png' />
                    <Skills image='BS.png' />
                    <Skills image='tailwind.png' />
                    <Skills image='js.png' />
                    <Skills image='ts.png' />
                    <Skills image='react.png' />
                    <Skills image='next.png' className={'scale_2'} />
                    <Skills image='redux.png' />
                    <Skills image='sass.png' />
                    <Skills image='github.png' />
                    <Skills image='vite.svg' />
                </div>
                {/* <div className="row">
                </div> */}
            </div>
        </section>
        </>

    );
}

export default About;