export type NoteType = {
  id: string;
  name: string;
  tag: string;
  noteText: string;
};
export interface INoteItem extends NoteType {
  ChangeText: (newValue: string, id: string, newTag: string) => void;
  addTag: (tagName: string, noteId: string) => void;
  deleteNote: (npteId: string) => void;
  changeNoteTitle: (newValue: string, noteId: string) => void;
}
export interface IEditTitleField {
  value: string;
  onChange: (title: string) => void;
}
