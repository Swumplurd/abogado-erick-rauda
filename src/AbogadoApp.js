import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { HomePage } from './components/HomePage/HomePage';
import { Navbar } from './components/Navbar/Navbar';

export const AbogadoApp = () => {
    return (
        <>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-12">
                        <Navbar />
                    </div>
                </div>
            </div>
            <div className="container">
                <HomePage />
            </div>
        </>
    )
}
