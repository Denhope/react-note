import { Dispatch } from 'redux';
import { NotesActionsType, NotesAction } from '../../types/notes';
import dataNotes from '../.././assets/data/noteData.json';
import axios from 'axios';

export const featchNotes = () => {
  return async (dispatch: Dispatch<NotesActionsType>) => {
    try {
      dispatch({ type: NotesAction.REQUEST_NOTES });
      const response = await axios.get(dataNotes);

      setTimeout(() => {
        dispatch({
          type: NotesAction.RECEIVE_NOTES_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (err) {
      dispatch({ type: NotesAction.RECEIVE_NOTES_ERROR, payload: 'Error' });
    }
  };
};

export const addNote = (title: string) => {
  return {
    type: NotesAction.ADD_NEW_NOTE,
    payload: {
      title,
    },
  } as const;
};
export const changeNote = (newValue: string, noteId: string, newTag: string) => {
  return {
    type: NotesAction.CHANGE_NOTE,
    payload: {
      newValue,
      noteId,
      newTag,
    },
  } as const;
};

export const deleteNote = (noteId: string) => {
  return {
    type: NotesAction.DELETE_NOTE,
    payload: {
      noteId,
    },
  } as const;
};

export const changeTitle = (newValue: string, noteId: string) => {
  return {
    type: NotesAction.CHANGE_NOTE_TITLE,
    payload: {
      newValue,
      noteId,
    },
  } as const;
};

export type addNewNoteType = ReturnType<typeof addNote>;

export type changeTitleType = ReturnType<typeof changeTitle>;

export type deleteNoteType = ReturnType<typeof deleteNote>;

export type changeNoteType = ReturnType<typeof changeNote>;
