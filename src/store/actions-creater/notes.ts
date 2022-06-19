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

export const addNote = (title: string): NotesActionsType => {
  return {
    type: NotesAction.ADD_NEW_NOTE,
    payload: {
      title,
    },
  };
};
export const changeNote = (newValue: string, noteId: string, newTag: string) => {
  return {
    type: NotesAction.CHANGE_NOTE,
    payload: {
      newValue,
      noteId,
      newTag,
    },
  };
};

export const deleteNote = (noteId: string): NotesActionsType => {
  return {
    type: NotesAction.DELETE_NOTE,
    payload: {
      noteId,
    },
  };
};

export const changeTitle = (newValue: string, noteId: string): NotesActionsType => {
  return {
    type: NotesAction.CHANGE_NOTE_TITLE,
    payload: {
      newValue,
      noteId,
    },
  };
};
