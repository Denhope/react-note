import { NoteItemType } from './notes';

export interface INewItem {
  addNewNote: (title: string) => void;
}

export interface ITitleField {
  value: string;
  onChange: (title: string) => void;
}

export interface INoteList {
  notes: Array<NoteItemType>;
  changeText: (newValue: string, id: string, newTag: string) => void;
  addTag: (tagName: string, noteId: string) => void;
  deleteNote: (npteId: string) => void;
  changeNoteTitle: (newValue: string, noteId: string) => void;
}

export interface ITextField {
  text: string;
  id: string;
  tag: string;
  changeText: (newValue: string, id: string, newTag: string) => void;
  addTag: (tagName: string) => void;
}

export interface ITagProps {
  name: string;
  id: string;
  selected: boolean;
  deleteTag: (id: string) => void;
  selectTag: (tagName: string) => void;
}
