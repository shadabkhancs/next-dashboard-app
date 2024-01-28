'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import CommonLayout from '@/app/components/layouts/CommonLayout';

export default function Page() {

    useEffect(() => {
        // Remove all existing classes from document.body.classList
        const navElement = document.querySelector('.sb-sidenav') as HTMLElement;
        navElement.classList.remove('sb-sidenav-dark');
        navElement.classList.add('sb-sidenav-light');

        // Cleanup function to restore the original classes on unmount
        return () => {
            navElement.classList.remove('sb-sidenav-light');
            navElement.classList.add('sb-sidenav-dark');
        };

    }, []);

    return (
        <CommonLayout>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Sidenav Light</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><Link href="/">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Sidenav Light</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                This page is an example of using the light side navigation option. By appending the
                                <code> .sb-sidenav-light </code>
                                class to the
                                <code> .sb-sidenav </code>
                                class, the side navigation will take on a light color scheme. The
                                <code>.sb-sidenav-dark</code>
                                is also available for a darker option.
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright © Your Website 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                ·
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </CommonLayout>
    )
}