import TextField from '@material-ui/core/TextField/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import './App.scss';
import NewNote from './components/NewNote/NewNote';
import NoteList from './components/NoteList/NodeList';
import { addNote, changeNote, changeTitle, deleteNote } from './redux/noteReducer';
import { AppRootStateType } from './redux/store';
import { NoteType } from './types/types';

export const App = () => {
  const notes = useSelector<AppRootStateType, Array<NoteType>>((state) => state.notes);
  const dispatch = useDispatch();
  const addNewNote = (title: string) => {
    dispatch(addNote(title));
  };
  const changeNoteTitle = (newValue: string, id: string) => {
    dispatch(changeTitle(newValue, id));
  };

  const deleteNoteItem = (id: string) => {
    dispatch(deleteNote(id));
  };

  const changeTextField = (newValue: string, id: string, newTag: string) => {
    dispatch(changeNote(newValue, id));
  };
  return (
    <div className=" App">
      <NewNote addNewNote={addNewNote}></NewNote>
      <NoteList
        notes={notes}
        changeText={changeTextField}
        addTag={function (tagName: string, noteId: string): void {
          throw new Error('Function not implemented.');
        }}
        deleteNote={deleteNoteItem}
        changeNoteTitle={changeNoteTitle}
      ></NoteList>
    </div>
  );
};

export default App;
