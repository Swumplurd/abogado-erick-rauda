import React from "react";
import Typewriter from "typewriter-effect";
import { Carousel } from "../Carousel/Carousel";
import { Contacto } from "../Contacto/Contacto";

export const HomePage = () => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <Carousel images={[
                        "/assets/erik_rauda_5.webp",
                        "/assets/erik_rauda_7.webp",
                        "/assets/erik_rauda_8.webp",
                        "/assets/erik_rauda_9.webp",
                        "/assets/erik_rauda_6.webp",
                    ]} id={'primer-carousel'}/>
                </div>
                <div className="col-6">
                    <h3 className="display-6">
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
        </>
    );
};
