export interface INewItem {
  addNewNote: (title: string) => void;
}

export type NoteType = {
  id: string;
  name: string;
  tag: string;
  noteText: string;
};
export interface INoteItem extends NoteType {
  changeText: (newValue: string, id: string, newTag: string) => void;
  addTag: (tagName: string, noteId: string) => void;
  deleteNote: (id: string) => void;
  changeNoteTitle: (newValue: string, noteId: string) => void;
}
export interface ITitleField {
  value: string;
  onChange: (title: string) => void;
}

export interface INoteList {
  notes: Array<NoteType>;
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
