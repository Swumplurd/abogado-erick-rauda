import React from "react";

export const Videos = () => {
    return (
        <>
        <div className="row justify-content-center">
        <div className="col-lg-8 col-md-6 col-sm-12">
            <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-interval="false"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/s5nS7JB8iXE"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/NeiGxNMZKx4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/sUVorC-q5UU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>  
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <img width="40%" height="400px" src="assets/themis/themis.png"/>
            </div>
        </div>
        </>
    );
};
