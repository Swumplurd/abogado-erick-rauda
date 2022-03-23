import React from 'react'

export const Contacto = () => {
  return (
    <form>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" aria-describedby="nombre-help"/>
            <div id="nombre-help" className="form-text">Ingresa tu nombre y apellido completo</div>
        </div>
        <div className="row mb-3">
            <div className="col">
                <label htmlFor="email " className="form-label">Correo Electronico</label>
                <input type="text" className="form-control" id="email " aria-describedby="email-help"/>
                <div id="email-help" className="form-text">Ingresa tu correo electronico</div>
            </div>
            <div className="col">
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input type="text" className="form-control" id="telefono" aria-describedby="telefono-help"/>
                <div id="telefono-help" className="form-text">Ingresa tu numero telefonico a 10 digitos</div>
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="lugar" className="form-label">Lugar del Proceso</label>
            <input type="text" className="form-control" id="lugar" aria-describedby="lugar-help"/>
            <div id="lugar-help" className="form-text">Lugar donde se llevara a cabo el caso</div>
        </div>
        <div className="mb-3">
            <label htmlFor="situacion" className="form-label">Situacion Actual</label>
            <textarea className="form-control" id="situacion" rows="3"></textarea>
            <div id="lugar-help" className="form-text">Lugar donde se llevara a cabo el caso</div>
        </div>
        <div className="mb-3">
            <label htmlFor="etapa" className="form-label">Etapa o Fase Donde se Encuentra</label>
            <input type="text" className="form-control" id="etapa" aria-describedby="etapa-help"/>
            <div id="etapa-help" className="form-text">Investigacion, intermedia, juicio, ultima audiencia o actuacion etc.</div>
        </div>
    </form>
  )
}
