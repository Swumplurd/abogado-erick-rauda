import React from "react";
import { Contacto } from "../Contacto/Contacto";

export const ContactoPage = () => {
    return (
        <>
            <div className="row mb-4">
                <div className="col-lg-7 col-md-12 text-justify">
                    <article>
                        <p className="fs-4">
                            ¿Que tal?, se que quizá tú o tu familiar están pasando por
                            una situación extremadamente complicada y comprendo que
                            requieres mi asesoría.
                            Sin embargo, mi tiempo es limitado y solo me permite
                            atender muy pocos casos a la vez.
                        </p>
                        <p className="fs-4">
                            Puedes ver este video para que conozcas mi forma de
                            trabajo:
                        </p>
                    </article>

                    <div className="d-flex justify-content-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6Y4_8PAlYes" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    
                    <article>
                        <p className="fs-4">
                            La opción que te ofrezco es recomendarte con un equipo
                            de jóvenes abogados con experiencia en el nuevo sistema
                            de justicia penal, ellos pueden revisar tu caso y darte
                            una asesoría gratuita, y también pueden brindarte
                            servicios de defensa de calidad a costos moderados. Para
                            ello debes llenar los siguientes recuadros:
                        </p>
                    </article>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="p-5 bg-light rounded-3 bg-secondary shadow">
                        <Contacto />
                    </div>
                </div>
            </div>
        </>
    );
};
