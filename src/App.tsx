import TextField from '@material-ui/core/TextField/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.scss';
import NewNote from './components/NewNote/NewNote';
import NoteList from './components/NoteList/NodeList';
import TagsList from './components/TagBar/TagList/TagList';
import { addNote, changeNote, changeTitle, deleteNote } from './redux/noteReducer';
import { AppRootStateType } from './redux/store';
import { addTag, deleteTag, selectTag } from './redux/tagsReduser';
import { NoteItemType, TagItemType } from './types/types';

export const App = () => {
  const notes = useSelector<AppRootStateType, Array<NoteItemType>>((state) => state.notes);
  const tags = useSelector<AppRootStateType, Array<TagItemType>>((state) => state.tags);
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('#all');
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
  let filtredNotes = notes;
  if (selectedTag !== '#all') {
    filtredNotes = notes.filter((note) => note.tag === selectedTag);
  }
  return (
    <div className={s.App}>
      <NewNote addNewNote={addNewNote}></NewNote>
      <TagsList tags={tags} deleteTag={deleteTagItem} selectTag={selectTagItem} />
      <NoteList
        notes={filtredNotes}
        changeText={changeTextField}
        addTag={addTagItem}
        deleteNote={deleteNoteItem}
        changeNoteTitle={changeNoteTitle}
      ></NoteList>
    </div>
  );
};

export default App;
