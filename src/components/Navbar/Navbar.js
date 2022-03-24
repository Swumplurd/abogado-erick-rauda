import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className="mb-4 bg-light rounded-3 bg-secondary text-center shadow">
                <div className="container-fluid pt-5">
                    <h1 className="display-5 fw-bold">Erik Rauda</h1>
                    <p className="fs-4">Doctor en Derecho Penal</p>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid justify-content-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/semblanza">Semblanza</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Materiales</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Videos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Enlaces</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
