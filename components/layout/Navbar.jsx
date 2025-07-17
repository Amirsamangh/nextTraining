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

            <nav className="navbar navbar-expand-lg navbar_bg mt-3 rounded py-1 mx-4 position-fixed top-0 z_index_max">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link href="/" className="navbar-brand mx-auto mx-lg-0">First</Link>

                    <div className="d-flex align-items-center d-lg-none">
                        <i className="navbar-icon bi-telephone-plus me-3"></i>
                        <a className="custom-btn btn" href="#section_5">
                            917-556-3670
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-5">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname == '/' ? 'active' : ''}`} href="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${pathname == '/about' ? 'active' : ''}`} href="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${pathname == '/services' ? 'active' : ''}`} href="/services">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${pathname == '/projects' ? 'active' : ''}`} href="/projects">Projects</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${pathname == '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
                            </li>
                        </ul>

                        <div className="d-lg-flex align-items-center d-none ms-auto">
                            <i className="navbar-icon bi-telephone-plus me-3"></i>
                            <a className="custom-btn btn" href="tel: 917-556-3670">
                                917-556-3670
                            </a>
                        </div>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar;