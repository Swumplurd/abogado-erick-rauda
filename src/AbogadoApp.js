import React from 'react';
import { HomePage } from './components/HomePage/HomePage';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SemblanzaPage } from './components/SemblanzaPage/SemblanzaPage';


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
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/semblanza" element={<SemblanzaPage />} />
                </Routes>
            </div>
        </>
    )
}
