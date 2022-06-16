import {
  addNewNoteType,
  changeNoteType,
  changeTitleType,
  deleteNoteType,
} from './../store/actions-creater/notes';

export type NoteItemType = {
  id: string;
  name: string;
  tag: string;
  noteText: string;
};
export interface INoteItemProps {
  id: string;
  name: string;
  tag: string;
  noteText: string;
  changeText: (newValue: string, id: string, newTag: string) => void;
  addTag: (tagName: string, noteId: string) => void;
  deleteNote: (id: string) => void;
  changeNoteTitle: (newValue: string, noteId: string) => void;
}

export interface NotesState {
  notesData: Array<NoteItemType>;
  isLoading: boolean;
  error: null | string;
}
export interface INoteList {
  notes: Array<NoteItemType>;
  changeText: (newValue: string, id: string, newTag: string) => void;
  addTag: (tagName: string, noteId: string) => void;
  deleteNote: (npteId: string) => void;
  changeNoteTitle: (newValue: string, noteId: string) => void;
}

export interface INewItem {
  addNewNote: (title: string) => void;
}
export enum NotesAction {
  REQUEST_NOTES = 'REQUEST_NOTES',
  RECEIVE_NOTES_SUCCESS = 'RECEIVE_NOTES_SUCCESS',
  RECEIVE_NOTES_ERROR = 'RECEIVE_NOTES_ERROR',
  ADD_NEW_NOTE = 'ADD_NEW_NOTE',
  CHANGE_NOTE_TITLE = 'CHANGE_NOTE_TITLE',
  DELETE_NOTE = 'DELETE_NOTE',
  CHANGE_NOTE = 'CHANGE_NOTE',
}

export interface RequestNotesAction {
  type: NotesAction.REQUEST_NOTES;
}

export interface RecieveNotesSuccess {
  type: NotesAction.RECEIVE_NOTES_SUCCESS;
  payload: Array<NoteItemType>;
}

export interface RecieveNotesError {
  type: NotesAction.RECEIVE_NOTES_ERROR;
  payload: string;
}

export type NotesActionsType =
  | RequestNotesAction
  | RecieveNotesSuccess
  | RecieveNotesError
  | addNewNoteType
  | changeTitleType
  | deleteNoteType
  | changeNoteType;
