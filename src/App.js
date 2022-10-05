
import './App.css';
import FormTareas from './components/formTareas/FormTareas';
import { useState } from 'react';
import Tareas from './components/tareas/Tareas';

function App() {
  const [listaTareas,setListaTareas]= useState([]);

  const nuevaTarea= (tarea) =>{
    setListaTareas([tarea,...listaTareas])
  }
  const borrar=(id)=>{
    const listaFilter=listaTareas.filter((indice=>indice === id));
    setListaTareas(listaFilter)
  }
 
  return (
    <div className="App">
      <FormTareas
      nuevaTarea={nuevaTarea}
      />
      <div className='lista'>
      {
        listaTareas.map((e,index)=><Tareas tarea={e}
        borrar={borrar}
        id={index}
        />
        )
    
      }
      </div>
      
      
    </div>
  );
}

export default App;
