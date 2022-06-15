import { Dispatch } from 'redux';
import { NotesActionsType, NotesAction } from '../../types/notes';
import dataNotes from '../.././assets/data/noteData1.json';
import axios from 'axios';

export const featchNotes = () => {
  return async (dispatch: Dispatch<NotesActionsType>) => {
    try {
      dispatch({ type: NotesAction.REQUEST_NOTES });
      const response = await axios.get(dataNotes);
      console.log(response.data);

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
// export type featchNotesType = ReturnType<typeof featchNotes>;

export type addNewNoteType = ReturnType<typeof addNote>;

export type changeTitleType = ReturnType<typeof changeTitle>;

export type deleteNoteType = ReturnType<typeof deleteNote>;

export type changeNoteType = ReturnType<typeof changeNote>;

/////// export async function loadNotesdata(url: string): Promise<Array<any>> {
//   const res = await fetch(url);
//   const notesData = await res.json();
//   ({
//     type: NotesAction.RECEIVE_NOTES_SUCCESS,
//     payload: notesData,
//   });
//   // const modelData: Array<INoteItemData> = Object.keys(notesData).map((it) => {
//   //   const item = notesData[it];
//   //   const record: INoteItemData = {
//   //     id: item.id,
//   //     tag: item.tag,
//   //     noteText: item.noteText,
//   //     name: item.name,
//   //   };
//   //   return record;
//   // });
//   console.log(notesData);
//   return notesData;
// }
// const initialState = modelData.map((note: any) => {
//   return {
//     ...note,
//     id: v1(),
//   };
// });

// return initialState;
// }
// loadNotesdata(data);
