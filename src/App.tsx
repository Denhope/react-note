import React, { FC, useEffect, useState } from 'react';
import s from './App.module.scss';
import NewNote from './components/NewNote/NewNote';
import NoteList from './components/NoteList/NodeList';
import TagsList from './components/TagBar/TagList/TagList';
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from './hooks/useTypeSelector';
import { useActions } from './hooks/useActions';

export const App: FC = () => {
  const { notesData, error, isLoading } = useTypedSelector((state) => state.notes);
  const { tagsData } = useTypedSelector((state) => state.tags);
  const { addNote, changeTitle, deleteNote, featchNotes, changeNote } = useActions();
  const { featchTags, deleteTag, selectTag, addTag } = useActions();
  const [selectedTag, setSelectedTag] = useState<string>('#all');
  useEffect(() => {
    featchNotes();
  }, []);

  useEffect(() => {
    featchTags();
  }, []);

  const addNewNote = (title: string) => {
    addNote(title);
  };
  const changeNoteTitle = (newValue: string, id: string) => {
    changeTitle(newValue, id);
  };

  const deleteNoteItem = (id: string) => {
    deleteNote(id);
  };

  const changeTextField = (newValue: string, id: string, newTag: string) => {
    changeNote(newValue, id, newTag);
  };

  const selectTagItem = (tagName: string) => {
    setSelectedTag(tagName);
    selectTag(tagName);
  };

  const deleteTagItem = (id: string) => {
    deleteTag(id);
  };

  const addTagItem = (tagName: string, noteId: string) => {
    addTag(tagName);
  };
  let filtredNotes = notesData;
  if (selectedTag !== '#all') {
    filtredNotes = notesData.filter((note) => note.tag === selectedTag);
  }

  return (
    <div className={s.App}>
      <div className={s.AppWrapper}>
        <NewNote addNewNote={addNewNote}></NewNote>
        <TagsList tags={tagsData} deleteTag={deleteTagItem} selectTag={selectTagItem} />
        <NoteList
          notes={notesData}
          changeText={changeTextField}
          addTag={addTagItem}
          deleteNote={deleteNoteItem}
          changeNoteTitle={changeNoteTitle}
        ></NoteList>
      </div>
    </div>
  );
};

export default App;
