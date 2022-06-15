import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.scss';
import NewNote from './components/NewNote/NewNote';
import NoteList from './components/NoteList/NodeList';
import TagsList from './components/TagBar/TagList/TagList';
import type {} from 'redux-thunk/extend-redux';
import { addTag, deleteTag, selectTag } from './store/actions-creater/tags';
import { useTypedSelector } from './hooks/useTypeSelector';
import { RootState } from './store/reducers';

import {
  featchNotes,
  addNote,
  changeNote,
  changeTitle,
  deleteNote,
} from './store/actions-creater/notes';

export const App: FC = () => {
  const { notesData, error, isLoading } = useTypedSelector((state) => state.notes);

  const tags = useSelector<RootState>((state) => state.tags);
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('#all');
  useEffect(() => {
    dispatch(featchNotes());
  }, []);

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
    dispatch(changeNote(newValue, id, newTag));
  };

  const selectTagItem = (tagName: string) => {
    setSelectedTag(tagName);
    dispatch(selectTag(tagName));
  };

  const deleteTagItem = (id: string) => {
    dispatch(deleteTag(id));
  };

  const addTagItem = (tagName: string, noteId: string) => {
    dispatch(addTag(tagName));
  };
  let filtredNotes = notesData;
  if (selectedTag !== '#all') {
    filtredNotes = notesData.filter((note) => note.tag === selectedTag);
  }

  return (
    <div className={s.App}>
      <div className={s.AppWrapper}>
        <NewNote addNewNote={addNewNote}></NewNote>
        {/* <TagsList tags={tags} deleteTag={deleteTagItem} selectTag={selectTagItem} /> */}
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
