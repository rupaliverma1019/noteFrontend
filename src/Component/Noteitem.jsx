import React, { useContext } from 'react'
import NoteContext from '../ContextApi/Notes/NoteContextNew'
import 'bootstrap-icons/font/bootstrap-icons.css';



const Noteitem = (props) => {
  const context = useContext(NoteContext)
  const {deleteNote} = context;
   const  { note, updateNote}=props;
  return (
    <div className='col-md-3'>
        
      <div class="card my-3" >
  
  <div class="card-body ">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description}</p>
    <i class="bi bi-trash3" onClick={()=>{deleteNote(note._id)}}></i>
    <i class="bi bi-pencil-square" onClick={()=>{updateNote(note)}}></i>
    
    
  </div>
</div>

    </div>
  )
}

export default Noteitem