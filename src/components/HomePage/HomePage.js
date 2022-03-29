import React from "react";
import Typewriter from "typewriter-effect";
import { Carousel } from "../Carousel/Carousel";
import { imageProvider, personalImageProvider } from "../../helpers/imageProvider";
import { Timeline } from "react-twitter-widgets";

export const HomePage = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <Carousel images={personalImageProvider} id={'primer-carousel'}/>
                </div>
            </div>
            <div className="row justify-content-center my-5">
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
            <div className="row justify-content-right mb-4">
                <div className="d-flex h-100 col-lg-4 col-md-12 justify-content-center">
                    <Timeline
                        dataSource={{ sourceType: "profile", screenName: "Erik_Rauda" }}
                        options={{ width: "400", height: "480" }}
                    />
                </div>
                <div className="col-lg-8 col-md-12 my-lg-auto mt-md-4">
                    <Carousel images={imageProvider} id={'segundo-carousel'}/>
                </div>
            </div>
        </>
    );
};
