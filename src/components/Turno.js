import React from 'react';
import PropTypes from 'prop-types';


const Turno = ({turno, eliminarTurno}) => (
    <div className="cita">
        <p>Paciente: <span>{turno.nombre} {turno.apellido}</span> </p>
        <p>DNI: <span>{turno.dni}</span> </p>
        <p>Fecha y hora: <span>{turno.fecha} {turno.hora}</span> </p>
        <p>Sintomas: <span>{turno.sintomas}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarTurno(turno.id) }
        >Atender &times;</button>
    </div>
);

Turno.propTypes = {
    turno: PropTypes.object.isRequired,
    eliminarTurno: PropTypes.func.isRequired
}

export default Turno;