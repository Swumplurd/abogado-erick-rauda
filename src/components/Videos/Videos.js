import React from "react";

export const Videos = () => {
    return (
        <>
        <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12 col-sm-12">
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-interval="false"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/s5nS7JB8iXE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="carousel-item">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/NeiGxNMZKx4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="carousel-item">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/sUVorC-q5UU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>  
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center my-md-3 my-lg-0">
                <img className="img-fluid" width="40%" height="400px" src="assets/themis/themis.png" alt="..."/>
            </div>
        </div>
        </>
    );
};
