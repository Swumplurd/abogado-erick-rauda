import React from "react";
import Typewriter from "typewriter-effect";

import { Carousel } from "../Carousel/Carousel";

export const HomePage = () => {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <h2 className="display-2">
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
                    </h2>
                </div>
                <div className="col-8">
                    <Carousel images={[
                        "/assets/erik_rauda_1.webp",
                        "/assets/erik_rauda_2.webp",
                        "/assets/erik_rauda_3.webp",
                    ]} id={'primer-carousel'}/>
                </div>
            </div>
        </>
    );
};
