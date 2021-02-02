import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearTurno}) => {
    //Crear state de turnos
    const [turno, actualizarTurno] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)

    //listen de los input
    const actualizarState = e => {
        actualizarTurno({
            ...turno,
            [e.target.name] : e.target.value
        })
    }

    //Extraer los valores
    const { nombre, apellido, dni, fecha, hora, sintomas } = turno;

    //Submit form
    const submitTurno = e  => {
        e.preventDefault();
        //validar
        if(nombre.trim() === '' || apellido.trim() === '' || dni.trim() === '' || fecha.trim() === ''|| 
        hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        //Eliminar mensaje previo
        actualizarError(false);
        //Asignar ID
        turno.id = uuid();
        //Crear Turno
        crearTurno(turno);
        //Reiniciar form
        actualizarTurno({
          nombre: '',
          apellido: '',
          dni: '',
          fecha: '',
          hora: '',
          sintomas: ''
        })

    }

    return (
        <Fragment>
            <h2>Nuevo ingreso</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
            : null }
            <form
              onSubmit={submitTurno}
            >
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre"
                    onChange= {actualizarState}
                    value={nombre}
                />
                <label>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    className="u-full-width"
                    placeholder="Apellido"
                    onChange= {actualizarState}
                    value={apellido}
                />
                <label>DNI</label>
                <input
                    type="text"
                    name="dni"
                    className="u-full-width"
                    placeholder="Número de documento"
                    onChange= {actualizarState}
                    value={dni}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange= {actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange= {actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"   
                    onChange= {actualizarState} 
                    value={sintomas}   
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Guardar</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearTurno: PropTypes.func.isRequired
}

export default Formulario;