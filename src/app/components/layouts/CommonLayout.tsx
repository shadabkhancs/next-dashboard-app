'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import useSidebarToggle from './useSidebarToggle';

function CommonLayout({ children }: any) {
    const { sidebarToggleRef } = useSidebarToggle();

    const handleLinkClick = () => {
        // Close the sidebar when a link is clicked
        document.body.classList.remove('sb-sidenav-toggled');
    };

    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* Navbar Brand*/}
                <Link className="navbar-brand ps-3" onClick={handleLinkClick} href="/">Start Bootstrap</Link>
                {/* Sidebar Toggle*/}
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" ref={sidebarToggleRef} id="sidebarToggle"><i className="fas fa-bars" /></button>
                {/* Navbar Search*/}
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
                    </div>
                </form>
                {/* Navbar*/}
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Settings</a></li>
                            <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <Link className="nav-link" onClick={handleLinkClick} href={`/`}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                    Dashboard
                                </Link>
                                <div className="sb-sidenav-menu-heading">Interface</div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                                    Layouts
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </a>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" onClick={handleLinkClick} href="layout-static">Static Navigation</Link>
                                        <Link className="nav-link" onClick={handleLinkClick} href="layout-sidenav-light">Light Sidenav</Link>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                                    Pages
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                </a>
                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                            Authentication
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <Link className="nav-link" onClick={handleLinkClick} href="login">Login</Link>
                                                <Link className="nav-link" onClick={handleLinkClick} href="register">Register</Link>
                                                <Link className="nav-link" onClick={handleLinkClick} href="forgot-password">Forgot Password</Link>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Error
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <Link className="nav-link" onClick={handleLinkClick} href="401.html">
                                                    401 Page
                                                </Link>
                                                <Link className="nav-link" onClick={handleLinkClick} href="404.html">
                                                    404 Page
                                                </Link>
                                                <Link className="nav-link" onClick={handleLinkClick} href="500.html">
                                                    500 Page
                                                </Link>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                <div className="sb-sidenav-menu-heading">Addons</div>
                                <Link className="nav-link" onClick={handleLinkClick} href={`charts`}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
                                    Charts
                                </Link>
                                <Link className="nav-link" onClick={handleLinkClick} href={`tables`}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                                    Tables
                                </Link>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>

                {/*  Page-specific content */}
                {children}

            </div>
        </>

    )
}

export default CommonLayout