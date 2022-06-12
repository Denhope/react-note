export interface INewItem {
  addNewNote: (title: string) => void;
}

export type NoteItemType = {
  id: string;
  name: string;
  tag: string;
  noteText: string;
};
export interface INoteItem extends NoteItemType {
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

export interface ITagItem {
  id: string;
  tagName: string;
  selected: boolean;
}

export interface ITagProps {
  name: string;
  id: string;
  selected: boolean;
  deleteTag: (id: string) => void;
  selectTag: (tagName: string) => void;
}
export interface TagsListProps {
  tags: Array<ITagItem>;
  deleteTag: (id: string) => void;
  selectTag: (tagName: string) => void;
}

export type TagItemType = {
  id: string;
  tagName: string;
  selected: boolean;
};

export interface INoteItemData {
  id: string;
  name: string;
  tag: string;
  noteText: string;
}

export interface INoteDto {
  id: string;
  name: string;
  tag: string;
  noteText: string;
}
