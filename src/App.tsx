import React, { FC, useEffect, useState } from 'react';
import s from './App.module.scss';
import NewNote from './components/NewNote/NewNote';
import NoteList from './components/NoteList/NodeList';
import TagsList from './components/TagBar/TagList/TagList';
import { useTypedSelector } from './hooks/useTypeSelector';
import { useActions } from './hooks/useActions';
import { selectTag } from './store/actions-creater/tags';

export const App: FC = () => {
  const { notesData } = useTypedSelector((state) => state.notes);
  const { tagsData } = useTypedSelector((state) => state.tags);
  const { addNote } = useActions();

  let [selectedTag, setSelectedTag] = useState<string>('#all');
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
        <TagsList tags={tagsData} selectTag={selectTagItem} />
        <NoteList notes={sortedNotes}></NoteList>
      </div>
    </div>
  );
};

export default App;
