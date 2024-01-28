import React from 'react'
import Link from 'next/link';

export default function Page({ params }: { params: { errorCode: string } }) {

    return (
        <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">

                                    {
                                        params.errorCode === "500.html" ? (
                                            <>
                                                <h1 className="display-1">500</h1>
                                                <p className="lead">Internal Server Error</p>
                                                <Link href="/">
                                                    <i className="fas fa-arrow-left me-1"></i>
                                                    Return to Dashboard
                                                </Link>
                                            </>
                                        ) : params.errorCode === "401.html" ? (
                                            <>
                                                <h1 className="display-1">401</h1>
                                                <p className="lead">Unauthorized</p>
                                                <p>Access to this resource is denied.</p>
                                                <Link href="/">
                                                    <i className="fas fa-arrow-left me-1"></i>
                                                    Return to Dashboard
                                                </Link>
                                            </>
                                        ) : (
                                            <>

                                                <img className="mb-4 img-error" src="assets/img/error-404-monochrome.svg" />
                                                <p className="lead">This requested URL was not found on this server.</p>
                                                <Link href="/">
                                                    <i className="fas fa-arrow-left me-1" />
                                                    Return to Dashboard
                                                </Link>
                                            </>
                                        )
                                    }





                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutError_footer">
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
        </div>
    )
}