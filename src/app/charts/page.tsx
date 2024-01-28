'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import CommonLayout from '../components/layouts/CommonLayout';


export default function Page() {

    return (
        <CommonLayout>
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Charts</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><Link href={`/`}>Dashboard</Link></li>
                        <li className="breadcrumb-item active">Charts</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-body">
                            Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official
                            <a target="_blank" href="https://www.chartjs.org/docs/latest/"> Chart.js documentation</a>
                            .
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-area me-1" />
                            Area Chart Example
                        </div>
                        <div className="card-body">
                            <LineChart width="100%" height={30} />
                        </div>
                        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-chart-bar me-1" />
                                    Bar Chart Example
                                </div>
                                <div className="card-body">
                                    <BarChart width="100%" height={50} />
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-chart-pie me-1" />
                                    Pie Chart Example
                                </div>
                                <div className="card-body">
                                    <PieChart width="100%" height={50} />
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </CommonLayout>
    )
}
