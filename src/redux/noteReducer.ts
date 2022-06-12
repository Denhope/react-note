import { INoteItemData, NoteItemType } from '../types/types';
import data from '../assets/data/noteData1.json';
import { v1 } from 'uuid';

const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const CHANGE_NOTE_TITLE = 'CHANGE_NOTE_TITLE';
const DELETE_NOTE = 'DELETE_NOTE';
const CHANGE_NOTE = 'CHANGE_NOTE';
const NOTE_LOAD = 'NOTE_LOAD';

async function loadNotesdata(url: string): Promise<Array<INoteItemData>> {
  const res = await fetch(url);
  const notesData = await res.json();
  const modelData: Array<INoteItemData> = Object.keys(notesData).map((it) => {
    const item = notesData[it];
    const record: INoteItemData = {
      id: item.id,
      tag: item.tag,
      noteText: item.noteText,
      name: item.name,
    };
    return record;
  });
  console.log(modelData);
  const initialState = modelData.map((note: any) => {
    return {
      ...note,
      id: v1(),
    };
  });

  return initialState;
}

const initialState = [
  {
    id: v1(),
    name: 'First note',
    tag: '#stydy',
    noteText: 'What to learn: TS#study',
  },
  {
    id: v1(),
    name: 'Second note',
    tag: '#working',
    noteText: 'I wont be working #working',
  },
];

export type ActionsType = addNewNoteType | changeTitleType | deleteNoteType | changeNoteType;
export function notesReducer(state: Array<NoteItemType> = initialState, action: ActionsType) {
  switch (action.type) {
    case ADD_NEW_NOTE: {
      const newNotes = [
        ...state,
        { id: v1(), name: action.payload.title, tag: '#all', noteText: 'Enter some text' },
      ];
      return newNotes;
    }
    case CHANGE_NOTE_TITLE: {
      const newNotes = state.map((note) =>
        note.id === action.payload.noteId ? { ...note, name: action.payload.newValue } : note,
      );
      return [...newNotes];
    }
    case DELETE_NOTE: {
      const newNotes = state.filter((note) => note.id !== action.payload.noteId);
      return [...newNotes];
    }
    case CHANGE_NOTE: {
      let newNotes = state.map((note) =>
        note.id === action.payload.noteId
          ? { ...note, noteText: action.payload.newValue, tag: action.payload.newTag }
          : note,
      );
      return [...newNotes];
    }
    default:
      return state;
  }
}

// actionCreators
export const addNote = (title: string) => {
  return {
    type: ADD_NEW_NOTE,
    payload: {
      title,
    },
  } as const;
};
export type addNewNoteType = ReturnType<typeof addNote>;

export const changeTitle = (newValue: string, noteId: string) => {
  return {
    type: CHANGE_NOTE_TITLE,
    payload: {
      newValue,
      noteId,
    },
  } as const;
};
export type changeTitleType = ReturnType<typeof changeTitle>;

export const deleteNote = (noteId: string) => {
  return {
    type: DELETE_NOTE,
    payload: {
      noteId,
    },
  } as const;
};
export type deleteNoteType = ReturnType<typeof deleteNote>;

export const changeNote = (newValue: string, noteId: string, newTag: string) => {
  return {
    type: CHANGE_NOTE,
    payload: {
      newValue,
      noteId,
      newTag,
    },
  } as const;
};

export type changeNoteType = ReturnType<typeof changeNote>;
