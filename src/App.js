import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario.js';
import Turno from './components/Turno.js';

function App() {
  
  //Turnos en el local storage
  let turnosIniciales = JSON.parse(localStorage.getItem('turnos'));
  if(!turnosIniciales) {
    turnosIniciales = [];
  }

  //Arreglo de turnos
  const [turnos, guardarTurnos] = useState(turnosIniciales);

  //Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let turnosIniciales = JSON.parse(localStorage.getItem('turnos'));
    
    if(turnosIniciales) {
      localStorage.setItem('turnos', JSON.stringify(turnos))
    }else{
      localStorage.setItem('turnos', JSON.stringify([]));
    }
  }, [turnos]);
  //Funcion stacks de turnos
  const crearTurno = turno => {
    guardarTurnos([ ...turnos,turno ]);
  }

  //Funcion que elimina un turno por su id
  const eliminarTurno = id => {
    const nuevosTurnos = turnos.filter(turno => turno.id !== id);
    guardarTurnos(nuevosTurnos);
  }

  //Mensaje condicional
  const titulo = turnos.length === 0 ? 'No hay turnos pendientes' : 'Lista de pacientes';

  return (
    <Fragment>
      <h1>Gestion de turnos</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearTurno={crearTurno}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {turnos.map(turno => (
              <Turno 
                key={turno.id}
                turno={turno}
                eliminarTurno={eliminarTurno}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
