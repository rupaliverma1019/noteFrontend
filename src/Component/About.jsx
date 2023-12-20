import React, { useContext } from 'react';
import NoteContext from '../ContextApi/Notes/NoteContextNew';
import Notes from './Notes';
import AddNote from './AddNote';

const About = () => {
  const state = useContext(NoteContext);

  return (
    <div>
      </div>
  );
};

export default About;
