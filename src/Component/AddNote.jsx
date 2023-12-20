import React, { useContext, useState } from 'react'
import NoteContext from '../ContextApi/Notes/NoteContextNew'

const AddNote = () => {
    const context = useContext(NoteContext)
    const {addNote } = context;
    const [note, setNotes] = useState({title:"" , description: "", tag: ""})

    const onChange =(e)=>{
        setNotes({...note, [e.target.name] : e.target.value})
    }
    const handleClick =(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNotes({title:"" , description: "", tag: ""})
    }



  return (
    <div className='container my-3'>
        
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} placeholder="Enter Title"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="description" name='description'  onChange={onChange} placeholder="Password"/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag'  onChange={onChange} placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>

    </div>
  )
}

export default AddNote