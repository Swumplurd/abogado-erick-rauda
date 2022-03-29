import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
        <div className="mb-4 bg-light rounded-3 bg-secondary text-center shadow">
                <div className="container-fluid my-auto py-3">
                    <h1 className="display-5 fw-bold">Erik Rauda</h1>
                    <p className="fs-4">Doctor en Derecho Penal</p>
                    <a className="text-decoration-none text-dark" data-auto-recognition="true" href="mailto:contacto@erikrauda.com">contacto@erikrauda.com</a>
                </div>
            </div>
            <div className="mb-4 bg-light rounded-3 bg-secondary text-center shadow">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid w-100 justify-content-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav w-100 mb-2 mb-lg-0 justify-content-between">
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold text-decoration-underline" to="/">
                                        <i className="bi bi-house-door me-2"></i>Inicio
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold text-decoration-underline" to="/semblanza">
                                        <i className="bi bi-file-earmark-person me-2"></i>Semblanza
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold text-decoration-underline" to="/">
                                        <i className="bi bi-file-earmark-text me-2"></i>Materiales
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold text-decoration-underline" to="/videos">
                                        <i className="bi bi-film me-2"></i>Videos
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold text-decoration-underline" to="/">
                                        <i className="bi bi-link-45deg me-2"></i>Enlaces
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold text-decoration-underline" to="/contacto">
                                        <i className="bi bi-person-lines-fill me-2"></i>Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        </>
    )
}
