import React from 'react'

export const Navbar = () => {
    return (
        <>
            <div className="px-5 mb-4 bg-light rounded-3 bg-secondary text-center">
                <div className="container-fluid pt-5">
                    <h1 className="display-5 fw-bold">Erik Rauda</h1>
                    <p className="fs-4">Doctor en Derecho Penal</p>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Semblanza</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Materiales</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Videos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Enlaces</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
