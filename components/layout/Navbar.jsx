'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname()
    return (
        <>
            {/* <section className="preloader">
                <div className="spinner">
                    <span className="spinner-rotate"></span>
                </div>
            </section> */}

            <nav className="navbar navbar-expand-lg navbar_bg mt-2 rounded py-0 mx-4 position-fixed top-0 z_index_max">
                <div className="container">



                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span>
                        <Link href="/" className="navbar-brand mx-auto mx-lg-0">Amirsaman</Link>
                    </span>

                    {/* <div className="d-none align-items-center d-lg-flex">
                        <i className="navbar-icon bi-telephone-plus me-3"></i>
                        <a className="custom-btn btn" href="tel: +989175563670">
                            917-556-3670
                        </a>
                    </div> */}

                    <div className="collapse navbar-collapse text-sm" id="navbarNav">
                        <ul className="navbar-nav ms-lg-5">
                            <li className="nav-item text_md">
                                <Link className={`nav-link ${pathname == '/' ? 'active' : ''} text_md`} href="/">صفحه اصلی</Link>
                            </li>

                            <li className="nav-item text_md">
                                <Link className={`nav-link ${pathname == '/about' ? 'active' : ''} text_md`} href="/about">درباره من</Link>
                            </li>

                            <li className="nav-item text_md">
                                <Link className={`nav-link ${pathname == '/services' ? 'active' : ''} text_md`} href="/services">خدمات</Link>
                            </li>

                            <li className="nav-item text_md">
                                <Link className={`nav-link ${pathname == '/projects' ? 'active' : ''} text_md`} href="/projects">پروژه ها</Link>
                            </li>

                            <li className="nav-item text_md">
                                <Link className={`nav-link ${pathname == '/contact' ? 'active' : ''} text_md`} href="/contact">ارتباط با من</Link>
                            </li>
                        </ul>

                        <div className="d-lg-flex align-items-center justify-content-center d-none ms-auto">
                            <i className=" bi-telephone-plus navbar-icon me-3"></i>
                            <a className="custom-btn btn !text-red-800" href="tel: +989175563670">
                                0917-556-3670
                            </a>
                        </div>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar;