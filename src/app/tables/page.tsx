'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import DataTablesExample from '../components/dataTables/DataTablesExample';
import CommonLayout from '../components/layouts/CommonLayout';


export default function Page() {
  console.log('rendered at===========>>>>>>>>>>>>>>');

  return (
    <CommonLayout>
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Tables</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item"><Link href={`/`}>Dashboard</Link></li>
              <li className="breadcrumb-item active">Tables</li>
            </ol>
            <div className="card mb-4">
              <div className="card-body">
                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                <a target="_blank" href="https://datatables.net/"> official DataTables documentation</a>
                .
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table me-1" />
                DataTable Example
              </div>
              <div className="card-body">
                <DataTablesExample />
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
