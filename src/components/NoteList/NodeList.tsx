import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { INoteList } from '../../types/notes';
import NoteItem from '../Note/NoteItem';
import s from './NoteList.module.scss';

const NoteList: FC<INoteList> = () => {
  const { notesData, error, isLoading } = useTypedSelector((state) => state.notes);
  const { changeTitle, deleteNote, featchNotes, changeNote, addTag, selectTag } = useActions();
  const [selectedTag, setSelectedTag] = useState<string>('#all');
  useEffect(() => {
    featchNotes();
  }, []);
  // let selectTagItem = (tagName: string) => {
  //   setSelectedTag(tagName);
  //   selectTag(tagName);
  // };

  const deleteNoteItem = (id: string) => {
    deleteNote(id);
  };
  const changeTextField = (newValue: string, id: string, newTag: string) => {
    changeNote(newValue, id, newTag);
  };

  const addTagItem = (tagName: string, noteId: string) => {
    addTag(tagName);
  };

  const changeNoteTitle = (newValue: string, id: string) => {
    changeTitle(newValue, id);
  };

  // let filtredNotes = notesData;
  // if (selectedTag !== '#all') {
  //   filtredNotes = notesData.filter((note) => note.tag === selectedTag);
  // }
  const mappedNotes = notesData.map((noteItem) => (
    <NoteItem
      id={noteItem.id}
      key={noteItem.id}
      name={noteItem.name}
      tag={noteItem.tag}
      noteText={noteItem.noteText}
      addTag={addTagItem}
      changeText={changeTextField}
      deleteNote={deleteNoteItem}
      changeNoteTitle={changeNoteTitle}
    />
  ));
  return <div className={s.NoteList}>{mappedNotes}</div>;
};

export default NoteList;
