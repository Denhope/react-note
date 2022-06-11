import React, { FC } from 'react';
import { INoteList } from '../../types/types';
import NoteItem from '../Note/NoteItem';
import s from './NoteList.module.scss';

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
  return <div className={s.NoteList}>{addedNotes}</div>;
};

export default NoteList;
