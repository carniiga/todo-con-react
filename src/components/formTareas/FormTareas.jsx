import React, { useState } from 'react'

const FormTareas = (props) => {
    const [inputText,setInputText] = useState("")
    const [validar,setValidar]= useState(true)
    const manejarForm = (e)=>{
       setInputText(e.currentTarget.value)
    }
    const submit = (e) =>{
        e.preventDefault();
        if(inputText.trim()!==""){
            props.nuevaTarea(inputText)
            setInputText("")
            setValidar(true)
        }else{
            setValidar(false)
        }
    }
  return (
    <div>
      <form className='form' onSubmit={submit}>
        <span>ingrese la tarea</span>
        <input className='input'  value={inputText} onChange={manejarForm}/>
        <button className='btn-add'>agregar </button>
      </form>
     {
        !validar &&
        <div className='validacion'>añadí una tarea , por favor.</div>
     }
    </div>
  )
}

export default FormTareas
