import // AddNewNoteAction,
// changeNoteType,
// changeTitleType,
// deleteNoteType,
'./../store/actions-creater/notes';

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

export interface RequestNotesAC {
  type: NotesAction.REQUEST_NOTES;
}

export interface RecieveNotesSuccessAC {
  type: NotesAction.RECEIVE_NOTES_SUCCESS;
  payload: Array<NoteItemType>;
}

export interface RecieveNotesErrorAC {
  type: NotesAction.RECEIVE_NOTES_ERROR;
  payload: string;
}

export interface AddNewNoteAC {
  type: NotesAction.ADD_NEW_NOTE;
  payload: {
    title: string;
  };
}
export interface ChangeTitleAC {
  type: NotesAction.CHANGE_NOTE_TITLE;
  payload: {
    newValue: string;
    noteId: string;
  };
}

export interface DeleteNoteAC {
  type: NotesAction.DELETE_NOTE;
  payload: {
    noteId: string;
  };
}

export interface ChangeNoteAC {
  type: NotesAction.CHANGE_NOTE;
  payload: {
    newValue: string;
    noteId: string;
    newTag: string;
  };
}

export type NotesActionsType =
  | RequestNotesAC
  | RecieveNotesSuccessAC
  | RecieveNotesErrorAC
  | AddNewNoteAC
  | ChangeTitleAC
  | DeleteNoteAC
  | ChangeNoteAC;
