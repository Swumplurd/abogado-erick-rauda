import React from "react";
import Typewriter from "typewriter-effect";
import { Carousel } from "../Carousel/Carousel";
import { Contacto } from "../Contacto/Contacto";

export const HomePage = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <Carousel images={[
                        "/assets/erik_rauda_1.jpg",
                        "/assets/erik_rauda_2.jpg",
                        "/assets/erik_rauda_3.jpg",
                        "/assets/erik_rauda_4.jpg",
                        "/assets/erik_rauda_5.jpg",
                        "/assets/erik_rauda_6.jpg",
                        "/assets/erik_rauda_7.jpg",
                        "/assets/erik_rauda_8.jpg",
                        "/assets/erik_rauda_9.jpg",
                        "/assets/erik_rauda_10.jpg",
                        "/assets/erik_rauda_11.jpg",
                        "/assets/erik_rauda_12.jpg",
                        "/assets/erik_rauda_13.jpg",
                        "/assets/erik_rauda_14.jpg",
                        "/assets/erik_rauda_15.jpg",
                        "/assets/erik_rauda_16.jpg",
                    ]} id={'primer-carousel'}/>
                </div>
                <div className="col-lg-6">
                    <h3 className="display-6 text-center">
                        "La verdadera diferencia se genera
                        <Typewriter
                            options={{
                                strings: [
                                    'creando"',
                                    'proponiendo"',
                                    'trabajando"',
                                    'moviendote"',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                </div>
            </div>
            <div className="row my-4 justify-content-center">
                <div className="col-lg-6">
                    <div className="p-5 bg-light rounded-3 bg-secondary shadow">
                        <Contacto/>
                    </div>
                </div>
            </div>
        </>
    );
};
