// NoteStateNew.js
import React , {useState} from 'react';
import NoteContext from './NoteContextNew';

const NoteState = (props) => {
const notesInitial = [
  {
    "title": "Updated Note Title",
    "description": "This is the  second updated note description.",
    "tag": "updated"
  }
]

const [notes, setNotes] = useState(notesInitial)


const getNotes = async() => {
  try {
    // API CALL
    const response = await fetch("http://localhost:8080/api/notes/fetchallnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    }); 

    const json = await response.json();
    console.log(json);
    setNotes(json);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}



//Add a notes 
const addNote = async (title, description, tag) => {
  // API CALL
  const response = await fetch("http://localhost:8080/api/notes/addnote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
    body: JSON.stringify({ title, description, tag }),
  });
  
  const json = await response.json(); // Await the JSON parsing
  
  const note = {
    "_id": json._id,
    "user": "64d09027337260fd08a52790",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2023-08-07T10:13:50.375Z",
    "__v": 0
  };
  
  setNotes(notes.concat(note));
  console.log(note);
};


//Edit a notes
const editNote = async(id, title, description, tag)=>{
  // API CALL
  const response = await fetch(`http://localhost:8080/api/notes/updatenote/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
    body: JSON.stringify({title,description,tag}),
    
  });
  
const json = await response.json();
console.log(json);
let newNotes= JSON.parse(JSON.stringify(notes))

  for(let index = 0; index<notes.length;index++){
    const element = newNotes[index];
    if(element._id === id){
      newNotes[index].title = title;
      newNotes[index].description= description;
      newNotes[index].tag = tag;
    }
  }
  setNotes(newNotes)
}



//Delete a Notes
const deleteNote = async(id) => {
// Api Call
const response = await fetch(`http://localhost:8080/api/notes/deletenote/${id}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem('token')
  },
  body: JSON.stringify({id}),
  
});

const json = response.json();
console.log(json)
const newNotes = notes.filter((note) => note._id !== id);

  setNotes(newNotes);

  console.log("Deleting node with id " + id);
};


  return (
    <NoteContext.Provider value={{notes ,addNote , editNote, deleteNote , getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;




//Edit a notes
// const editNote = async(id, title, description, tag)=>{
//   // API CALL
//   const response = await fetch(`http://localhost:8080/api/notes/updatenote/${id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMDkwMjczMzcyNjBmZDA4YTUyNzkwIn0sImlhdCI6MTY5MTM5MDA0MH0.fKU39j25GDWHrxO-JtCNG4zt7NvE_U33vGy3ILXie8s"
//     },
//     body: JSON.stringify({title,description,tag}),
    
//   });
  
// const json = response.json();

//   for(let index = 0; index<notes.length;index++){
//     const element = notes[index];
//     if(element._id === id){
//       element.title = title;
//       element.description= description;
//       element.tag = tag;
//     }
//   }
// }







