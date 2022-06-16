import React, { FC, useEffect, useState } from 'react';
import s from './App.module.scss';
import NewNote from './components/NewNote/NewNote';
import NoteList from './components/NoteList/NodeList';
import TagsList from './components/TagBar/TagList/TagList';
import { useTypedSelector } from './hooks/useTypeSelector';
import { useActions } from './hooks/useActions';

export const App: FC = () => {
  const { notesData } = useTypedSelector((state) => state.notes);
  const { tagsData } = useTypedSelector((state) => state.tags);
  const { addNote, selectTag } = useActions();
  const { featchTags, deleteTag } = useActions();
  const { changeTitle, deleteNote, featchNotes, changeNote, addTag } = useActions();
  const [selectedTag, setSelectedTag] = useState<string>('#all');
  useEffect(() => {
    featchNotes();
  }, []);

  useEffect(() => {
    featchTags();
  }, []);

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

  const deleteTagItem = (id: string) => {
    deleteTag(id);
  };

  const addNewNote = (title: string) => {
    addNote(title);
  };
  const selectTagItem = (tagName: string) => {
    setSelectedTag(tagName);
    selectTag(tagName);
  };

  let sortedNotes = notesData;
  if (selectedTag !== '#all') {
    sortedNotes = notesData.filter((note) => note.tag === selectedTag);
  }

  return (
    <div className={s.App}>
      <div className={s.AppWrapper}>
        <NewNote addNewNote={addNewNote}></NewNote>
        <TagsList tags={tagsData} selectTag={selectTagItem} deleteTag={deleteTagItem} />
        <NoteList
          notes={sortedNotes}
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
