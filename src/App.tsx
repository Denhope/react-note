import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import NewNote from './components/NewNote/NewNote';

export const App = () => {
  //   const dispatch = useDispatch();
  const addNote = (title: string) => {
    // dispatch(addNoteAC(title));
  };
  return (
    <div className=" App">
      <NewNote
        addNewNote={function (title: string): void {
          throw new Error('Function not implemented.');
        }}
      ></NewNote>
    </div>
  );
};

export default App;
