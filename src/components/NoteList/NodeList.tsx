import React, { FC } from 'react';
import { INoteList } from '../../types/notes';
import NoteItem from '../Note/NoteItem';
import s from './NoteList.module.scss';

const NoteList: FC<INoteList> = (props) => {
  const mappedNotes = props.notes.map((noteItem) => (
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
  return <div className={s.NoteList}>{mappedNotes}</div>;
};

export default NoteList;
