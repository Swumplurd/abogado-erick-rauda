import React from "react";
import Typewriter from "typewriter-effect";
import { Carousel } from "../Carousel/Carousel";
import { imageProvider } from "../../helpers/imageProvider";

export const HomePage = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <Carousel images={imageProvider} id={'primer-carousel'}/>
                </div>
            </div>
            <div className="row justify-content-center">
            <h3 className="display-4 text-center">
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
        </>
    );
};
