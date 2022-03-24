import React from 'react';
import { HomePage } from './components/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { SemblanzaPage } from './components/SemblanzaPage/SemblanzaPage';
import { SocialBar } from './components/SocialBar/SocialBar';

export const AbogadoApp = () => {
    return (
        <>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-12">
                        <Navbar />
                        <SocialBar/>
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
