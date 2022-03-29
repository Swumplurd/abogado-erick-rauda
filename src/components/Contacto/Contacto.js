import React from "react";

export const Contacto = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                    Nombre
                </label>
                <input type="text" className="form-control" id="nombre" aria-describedby="nombre-help" placeholder="Nombre y apellidos completos"/>
                <div id="nombre-help" className="form-text">
                    Ingresa tu nombre y apellido completo
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="email " className="form-label">
                        Correo electronico
                    </label>
                    <input type="text" className="form-control" id="email " aria-describedby="email-help" placeholder="Email"/>
                    <div id="email-help" className="form-text">
                        Ingresa tu correo electronico
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="telefono" className="form-label">
                        Telefono
                    </label>
                    <input type="text" className="form-control" id="telefono" aria-describedby="telefono-help" placeholder="WhatsApp preferente"/>
                    <div id="telefono-help" className="form-text">
                        Ingresa tu numero telefonico a 10 digitos
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="lugar" className="form-label">
                    Lugar del proceso
                </label>
                <input type="text" className="form-control" id="lugar" aria-describedby="lugar-help" placeholder="Ciudad"/>
                <div id="lugar-help" className="form-text">
                    Lugar donde se llevara a cabo el caso
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="situacion" className="form-label">
                    Situacion actual
                </label>
                <textarea className="form-control" id="situacion" rows="3" placeholder="Indícame el nombre de la persona que tiene el problema y explicame si esta detenida, en libertad, con medida cautelar, sentenciada, etc..."></textarea>
                <div id="lugar-help" className="form-text">
                    Lugar donde se llevara a cabo el caso
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="etapa" className="form-label">
                    Etapa o fase donde se encuentra
                </label>
                <input type="text" className="form-control" id="etapa" aria-describedby="etapa-help" placeholder="Investigación, intermedia,  juicio, última audiencia o actuación, etc"/>
                <div id="etapa-help" className="form-text">
                    Investigacion, intermedia, juicio, ultima audiencia o
                    actuacion etc.
                </div>
            </div>
        </form>
    );
};
