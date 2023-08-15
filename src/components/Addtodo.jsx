import React, { useState } from 'react'

export const Addtodo = ({onAdd}) => {
    const [text,setText]= useState('')
    const [day,setDay]= useState('')
    const [reminder,setReminder]= useState(false)
    const onSubmit = (e) =>{
            e.preventDefault()
            !text ? alert('enter task'): !day ? alert('enter day & time'): onAdd({text,day,reminder})
            
            setText('')
            setDay('')
            setReminder('')
       
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Todo</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add todo'/>
        </div>
        <div className='form-control'>
            <label>day & time</label>
            <input type="text" value={day} onChange={(e)=>setDay(e.target.value)} placeholder='Add date & time'/>
        </div>
        <div className='form-control form-control-check'>
            <label>reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value='submit' className='btn btn-block'/>
    </form>
  )
}
