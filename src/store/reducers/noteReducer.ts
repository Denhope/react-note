import { v1 } from 'uuid';
import { NotesActionsType, NotesAction, NotesState } from '../../types/notes';

const initialState: NotesState = {
  notesData: [],
  isLoading: false,
  error: null,
};

export const notesReducer = (state = initialState, action: NotesActionsType): NotesState => {
  switch (action.type) {
    case NotesAction.REQUEST_NOTES: {
      return {
        notesData: [],
        isLoading: true,
        error: null,
      };
    }
    case NotesAction.RECEIVE_NOTES_SUCCESS: {
      return {
        notesData: action.payload,
        isLoading: false,
        error: null,
      };
    }

    case NotesAction.RECEIVE_NOTES_ERROR: {
      return {
        notesData: [],
        isLoading: false,
        error: action.payload,
      };
    }
    case NotesAction.ADD_NEW_NOTE: {
      return {
        notesData: [
          ...state.notesData,
          { id: v1(), name: action.payload.title, tag: '#all', noteText: 'Enter some text' },
        ],
        isLoading: false,
        error: null,
      };
    }

    case NotesAction.CHANGE_NOTE_TITLE: {
      return {
        isLoading: false,
        error: null,
        notesData: [
          ...state.notesData.map((note) =>
            note.id === action.payload.noteId ? { ...note, name: action.payload.newValue } : note,
          ),
        ],
      };
    }
    case NotesAction.DELETE_NOTE: {
      return {
        isLoading: false,
        error: null,
        notesData: [...state.notesData.filter((note) => note.id !== action.payload.noteId)],
      };
    }
    case NotesAction.CHANGE_NOTE: {
      return {
        isLoading: false,
        error: null,
        notesData: [
          ...state.notesData.map((note) =>
            note.id === action.payload.noteId
              ? { ...note, noteText: action.payload.newValue, tag: action.payload.newTag }
              : note,
          ),
        ],
      };
    }

    default:
      return state;
  }
};
