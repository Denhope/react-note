import React, { FC, useCallback } from 'react';
import { INoteItem, INoteList } from '../../types/types';
import NoteItem from '../Note/NoteItem';

const NoteList: FC<INoteList> = (props) => {
  const addedNotes = props.notes.map((noteItem) => (
    <NoteItem
      id={noteItem.id}
      key={noteItem.id}
      name={noteItem.name}
      tag={noteItem.tag}
      noteText={noteItem.noteText}
      addTag={props.addTag}
      changeText={props.changeText}
      deleteNote={props.deleteNote}
      changeNoteTitle={props.changeNoteTitle}
    />
  ));
  return <div className="note-list-container">{addedNotes}</div>;
};

export default NoteList;
